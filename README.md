# `jorin` - Jorin CLI

Console command to access and control Jorin

## Installation

## Usage

```
Usage: jorin [options] [command]

Jorin AI client for managing tasks, sessions, and agents.

Options:
  -V, --version    output the version number
  -l, --llm <llm>  Specify a Large Language Model
  -hub <url>       Specify a Jorin Hub URL
  -h, --help       display help for command

Commands:
  tasks            Create, list, watch and manage tasks
  do               Alias for task new --watch
  sessions         Session management
  agents           Agent management
  setup            Starts the hub and configures if not already set up
```

## Dev

bun run src/index.ts

## Packaging

```
make
```

Or `make -B` to force.

This should create `dist/jorin`.