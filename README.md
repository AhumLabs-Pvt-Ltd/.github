# AhumLabs-Pvt-Ltd/.github

Organization-wide defaults for the Ahum community on GitHub:

- `profile/README.md`: the text shown on the organization page.
- `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `SECURITY.md`: default community health files.
  GitHub shows them in any Ahum repository that does not have its own copy.
- `.github/ISSUE_TEMPLATE/` and `.github/pull_request_template.md`: default issue forms and
  PR template for every Ahum repository that does not define its own.

GitHub only applies these defaults while this repository is **public**.

## 10-minute quickstart

You need Git, Node.js 22 or newer, and pnpm 9 (`corepack enable` installs it).

1. Clone and install (2 min):

   ```sh
   git clone https://github.com/AhumLabs-Pvt-Ltd/.github.git ahum-dotgithub
   cd ahum-dotgithub
   pnpm install
   ```

2. Turn on the secret scan hook (2 min). Install [pre-commit](https://pre-commit.com) and
   [gitleaks](https://github.com/gitleaks/gitleaks#installing), then:

   ```sh
   pre-commit install
   ```

3. Make your change (5 min). For example, edit `profile/README.md` or an issue form in
   `.github/ISSUE_TEMPLATE/`.

4. Check it (1 min):

   ```sh
   pnpm lint   # markdown style
   pnpm test   # issue forms and PR template are valid
   ```

   Open a pull request. CI runs the same checks plus a secret scan and a dependency audit.

## License

Apache-2.0 for any code here. The Code of Conduct is adapted from the
[Contributor Covenant](https://www.contributor-covenant.org) v2.1 (CC BY 4.0).
