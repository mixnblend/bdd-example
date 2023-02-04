# BDD Demo <!-- omit in toc -->

Monorepo to demonstrate end to end testing using Cypress and Cucumber/Gherkin.

## Table Of Contents<!-- omit in toc -->

- [Quick Start (local)](#quick-start-local)
- [Available Commands](#available-commands)
- [Monorepo](#monorepo)
- [Contributing](#contributing)
- [Testing](#testing)
  - [Applications and their purpose](#applications-and-their-purpose)
- [Additional Docs](#additional-docs)

## Quick Start (local)

1. Install all [Prerequisites](docs/prerequisites.md)
2. `npm install` Initiate the project (installs all dependencies for all packages)
3. Check unit tests with `npx nx run web:test` or `npx nx run web:test --watch=true`. Kill Jest.
4. Run `npx nx serve web` to serve the web application - shut it down.
5. Run `npx nx run web-e2e:e2e` to run the end to end tests.
6. Go to `dist/cypress/apps/web-e2e` and look at the screenshots and videos generated.
7. You can see the Gherkin feature files and the steps implemented in cypress at `apps/web-e2e/src/e2e/Home.feature`, etc.

**[⬆ back to top](#table-of-contents)**

## Available Commands

to see a list of available commands run:

```bash
npm run help
```

Also, please read the document [Monorepo How](docs/monorepo-how.md) for a list of commands relating to NX.

**[⬆ back to top](#table-of-contents)**

## Monorepo

This is a monorepo, that uses NX

- [Why have our packages in a Monorepo?](docs/monorepo-why.md)
- [How to use this Monorepo?](docs/monorepo-how.md)

**[⬆ back to top](#table-of-contents)**

## Contributing

Before contributing please read through everything in [Contributing](docs/contributing.md)

**[⬆ back to top](#table-of-contents)**

## Testing

Run all unit tests (optionally in watch mode):

```bash
npm run test
```

### Applications and their purpose

The following comprise a list of applications in the repo and their purpose (housed in the apps folder)

- web - React application to demonstrate end to end tests using Cypress and Gherkin
- web-e2e - end to end tests using Cypress for the web application

**[⬆ back to top](#table-of-contents)**

## Additional Docs

- [Branches](docs/branches.md)
- [Contributing](docs/contributing.md)
- [Monorepo How?](docs/monorepo-how.md)
- [Monorepo Why?](docs/monorepo-why.md)
- [NodeJS Version](docs/node-version.md)
- [Prerequisites](docs/prerequisites.md)

**[⬆ back to top](#table-of-contents)**
