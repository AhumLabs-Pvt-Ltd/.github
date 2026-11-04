# AGENTS.md

Instructions for AI coding agents working in this repository.

## What this repo is

Organization-wide GitHub defaults for Ahum: the org profile, code of conduct, contributing
guide, security policy, issue forms and PR template. There is no application code.

## Install

```sh
corepack enable        # provides pnpm 9
pnpm install
```

## Test

```sh
pnpm lint    # markdownlint on all .md files
pnpm test    # validates issue forms, PR template and required files
pnpm audit   # dependency audit
gitleaks git --redact .   # secret scan, if gitleaks is installed
```

All four must pass before you open a pull request.

## Run

Nothing to run. Changes take effect on GitHub once merged to `main` (and only while the
repository is public).

## Rules

- Synthetic data only. Never add real ship, client or crew data.
- Never add secrets.
- Keep the PR template checklist items: tests pass, no real data, no secrets, docs updated.
- Do not edit `CODE_OF_CONDUCT.md` text beyond the contact line; it is the Contributor
  Covenant v2.1.
- Plain, direct writing.
