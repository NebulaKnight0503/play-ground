# NX Playground

NX Playground is a monorepo `package-based` project created to test the NX functionality.


## Publish to NPM

### Auto publish
This project showcases how to automatically publish multiple packages with [ngx-deploy-npm](https://www.npmjs.com/package/ngx-deploy-npm) via GH-Actions on Push to `main` branch [bump-version.yml](./.github/workflows/bump-version.yml)

The project contains multiple package under [`@nx-playground`](https://www.npmjs.com/org/nx-playground) scope

### Manually publish
- Login to NPM locally: npm login
- Update `OTP` in [release-packages.bash](./scripts/release-packages.bash)
- Execute `bash ./scripts/release-packages.bash`
## Running scripts

Build all packages

```bash
yarn build:all
```

Run tests
```bash
yarn test
```

Run linting

```bash
yarn lint
```

## Running tasks

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).

