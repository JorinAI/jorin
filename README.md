# `jorin` - Jorin CLI

Console command to access and control Jorin

## Installation

To install or upgrade:

```bash
curl -fsSL https://jorin.ai/install | bash
```

## Usage

```
$ jorin --help

     ██╗ ██████╗ ██████╗ ██╗███╗   ██╗    █████╗ ██╗
     ██║██╔═══██╗██╔══██╗██║████╗  ██║   ██╔══██╗██║
     ██║██║   ██║██████╔╝██║██╔██╗ ██║   ███████║██║
██   ██║██║   ██║██╔══██╗██║██║╚██╗██║   ██╔══██║██║
╚█████╔╝╚██████╔╝██║  ██║██║██║ ╚████║██╗██║  ██║██║
 ╚════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═╝╚═╝

Usage: jorin [options] [command]

Jorin AI client for managing tasks, sessions, and agents.

Options:
  -V, --version    output the version number
  -l, --llm <llm>  Specify a Large Language Model
  --hub <url>      Specify a Jorin Hub URL
  -h, --help       display help for command

Commands:
  tasks            Create, list, watch and manage tasks
  do               Alias for task new --watch
  sessions         Session management
  agents           Agent management
  llm              Manage and interact with Large Language Models directly
  setup [options]  Starts the hub and configures if not already set up

Learn more about Jorin: https://jorin.ai

$ jorin tasks
  list                         List all tasks
  watch <id>                   Start watching a specific task
  new [options] <description>  Adds a task to the hub and returns the ID

$ jorin sessions
  new [options]   Create a new session
  exec            Execute a command in a session

$ jorin agents
  list            List all agents
  make [options]  Create and spawn a new agent

$ jorin llm
  list                      List all LLMs
  send [options] <message>  Send a message to an LLM
```

## Dev

```bash
bun run src/index.ts
```

`jorin-cli` makes use of:

* Bun
* Cross platform: configstore, env-paths
* CLI: commander, inquirer
* UI: figlet, chalk, gradient-string
* LLMs: Ollama

### Dev Requirements

* [bun](https://bun.sh/)

## Packaging

```bash
make
```

Or `make -B` to force.

This should create `dist/jorin`.

Packaging requirements:

* bun
* make
