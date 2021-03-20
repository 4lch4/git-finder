@4lch4/git-finder
=================

Finds all directories that contain a git repository within a given directory.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@4lch4/git-finder.svg)](https://npmjs.org/package/@4lch4/git-finder)
[![Codecov](https://codecov.io/gh/4lch4/git-finder/branch/master/graph/badge.svg)](https://codecov.io/gh/4lch4/git-finder)
[![Downloads/week](https://img.shields.io/npm/dw/@4lch4/git-finder.svg)](https://npmjs.org/package/@4lch4/git-finder)
[![License](https://img.shields.io/npm/l/@4lch4/git-finder.svg)](https://github.com/4lch4/git-finder/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @4lch4/git-finder
$ git-finder COMMAND
running command...
$ git-finder (-v|--version|version)
@4lch4/git-finder/0.0.0 darwin-x64 node-v14.16.0
$ git-finder --help [COMMAND]
USAGE
  $ git-finder COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`git-finder autocomplete [SHELL]`](#git-finder-autocomplete-shell)
* [`git-finder commands`](#git-finder-commands)
* [`git-finder help [COMMAND]`](#git-finder-help-command)

## `git-finder autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ git-finder autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ git-finder autocomplete
  $ git-finder autocomplete bash
  $ git-finder autocomplete zsh
  $ git-finder autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.3.0/src/commands/autocomplete/index.ts)_

## `git-finder commands`

list all the commands

```
USAGE
  $ git-finder commands

OPTIONS
  -h, --help              show CLI help
  -j, --json              display unfiltered api data in json format
  -x, --extended          show extra columns
  --columns=columns       only show provided columns (comma-separated)
  --csv                   output is csv format [alias: --output=csv]
  --filter=filter         filter property by partial string matching, ex: name=foo
  --hidden                show hidden commands
  --no-header             hide table header from output
  --no-truncate           do not truncate output to fit screen
  --output=csv|json|yaml  output in a more machine friendly format
  --sort=sort             property to sort by (prepend '-' for descending)
```

_See code: [@oclif/plugin-commands](https://github.com/oclif/plugin-commands/blob/v1.3.0/src/commands/commands.ts)_

## `git-finder help [COMMAND]`

display help for git-finder

```
USAGE
  $ git-finder help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
