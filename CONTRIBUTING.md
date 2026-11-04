# Contributing to Ahum

Thanks for helping. This guide applies to every repository in the Ahum organization.
Each repository's own README and AGENTS.md list the exact install, test and run commands.

## Ground rules

1. **Synthetic data only.** Never commit real ship, client, crew or voyage data. That
   includes real IMO numbers paired with internal details, crew names, certificate scans,
   and screenshots of real systems. If you need data, use or extend a synthetic fleet.
2. **No secrets.** API keys go in a local `.env` file that Git ignores. Never paste keys
   into code, tests, issues or pull requests. Install the pre-commit hook (below) so
   gitleaks checks every commit.
3. **Write maritime knowledge in your own words.** Link to the official source (IMO, the
   flag state, the class society). Do not copy convention or regulation text.
4. **Follow the [Code of Conduct](CODE_OF_CONDUCT.md).**

## How to contribute

1. Look for an issue, or open one first for anything larger than a small fix.
2. Fork the repository and create a branch: `git checkout -b fix/short-description`.
3. Install dependencies and the secret scan hook:

   ```sh
   pnpm install
   pre-commit install   # needs https://pre-commit.com and gitleaks
   ```

4. Make the change. Add or update tests for code changes.
5. Run `pnpm lint` and `pnpm test` until both pass.
6. Open a pull request and fill in the checklist in the template.

A maintainer will review within a few working days. Small, focused pull requests get
reviewed faster.

## Reporting a mistake in maritime knowledge

Use the **Maritime knowledge correction** issue form. Tell us which card or file is
wrong, what the correct information is, and link the official source.

## Contributor License Agreement (CLA)

We will ask contributors to sign a Contributor License Agreement before we merge their
first pull request. The CLA confirms that you have the right to contribute your work and
that Ahum Labs may distribute it under the repository's license. A CLA bot will be added
to pull requests soon. Until then, a maintainer may ask you to confirm this in a comment.
If you are under 18, a parent or guardian may need to sign as well.

## Security issues

Do not report security problems in public issues. See [SECURITY.md](SECURITY.md).
