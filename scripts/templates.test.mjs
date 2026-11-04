// Checks that issue forms parse and follow the rules GitHub enforces,
// and that the PR template keeps its required checklist items.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { parse } from "yaml";

const dir = ".github/ISSUE_TEMPLATE";
const forms = readdirSync(dir).filter((f) => f.endsWith(".yml") && f !== "config.yml");

test("expected issue forms exist", () => {
  for (const f of ["bug_report.yml", "feature_request.yml", "maritime_knowledge_correction.yml"]) {
    assert.ok(forms.includes(f), `missing ${f}`);
  }
});

for (const file of forms) {
  test(`${file} is a valid issue form`, () => {
    const form = parse(readFileSync(`${dir}/${file}`, "utf8"));
    assert.equal(typeof form.name, "string");
    assert.equal(typeof form.description, "string");
    assert.ok(Array.isArray(form.body) && form.body.length > 0);
    const ids = form.body.filter((b) => b.id).map((b) => b.id);
    assert.equal(new Set(ids).size, ids.length, "duplicate ids");
    assert.ok(
      form.body.some((b) => b.type !== "markdown"),
      "needs at least one input field",
    );
  });
}

test("PR template has the required checklist", () => {
  const pr = readFileSync(".github/pull_request_template.md", "utf8").toLowerCase();
  for (const item of ["tests pass", "no real ship", "no secrets", "docs updated"]) {
    assert.ok(pr.includes(item), `missing checklist item: ${item}`);
  }
});

test("community health files exist", () => {
  for (const f of ["CODE_OF_CONDUCT.md", "CONTRIBUTING.md", "SECURITY.md", "profile/README.md"]) {
    assert.ok(existsSync(f), `missing ${f}`);
  }
});
