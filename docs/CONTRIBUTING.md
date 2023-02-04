# Contributing

## Naming Conventions

### Git Branch Names

Follow the guidelines outlined in [branches](branches.md)

## Pull Requests & Merging

1. Branch from main.
2. Once your work is done, create a Pull Request back onto develop, this will automatically request reviews from all code owners on your target branch.
3. Once approved, squash merge into the target branch.

## Git Commit Messages

We are using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

Additionally we will include the scope (package-name), or skip it for changes to the base project, inline with [@commitlint/config-lerna-scopes](https://www.npmjs.com/package/commitlint-plugin-workspace-scopes), which we are using to lint commits.

```text
"feat(web): add auth"
```

```text
"style(web): change button color"
```

```text
"refactor: Update base ci script"
```

> NOTE: chore refers to infrastructure, CI, scripts etc, so will never relate to a feature module, so you should never do `"chore(some-module): some chore"`
