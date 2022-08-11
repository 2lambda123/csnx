# csnx

> Monorepo for Guardian UIs

Managed by [Nx](https://nx.dev/).

## Packages

The following packages from `libs/*` are published to NPM:

<!-- START PACKAGES -->
<!-- THIS LIST IS AUTOGENERATED BY tools/scripts/maintain-readme.mjs -->

- [@guardian/tsconfig](libs/tsconfig)

<!-- END PACKAGES -->

## Development

1. Clone the repo
1. Run a task.

## Running tasks

Tasks are defined in the [`Makefile`](./Makefile).

- `make build` builds all projects
- `make test` runs all tests

The [output of tasks are remotely cached by Nx](https://nx.dev/using-nx/mental-model#computation-hashing-and-caching). This means re-running a task will be instant if no code has changed.

### Requirements

_You'll be prompted to install any missing requirements if they are needed..._

<!--
### When migrating an existing project into CSNX

- remove the current `.git` file from your existing project using `rm -rf .git` within the project root dir.
-->

## Troubleshooting

### Unable to commit

If you get a `command not found` error when commiting using a GUI (VSCode, GitHub desktop etc), add a `~/.huskyrc` file and load your Node version manager there.

For example, if you use [`fnm`](https://github.com/Schniz/fnm):

```sh
# ~/.huskyrc
eval "$(fnm env)"
fnm use
```

Or for [`asdf`](https://asdf-vm.com/):

```sh
# ~/.huskyrc (intel macs)
. /usr/local/opt/asdf/libexec/asdf.sh
```

```sh
# ~/.huskyrc (apple silicon)
. /opt/homebrew/opt/asdf/asdf.sh
```

See https://typicode.github.io/husky/#/?id=command-not-found for more info.
