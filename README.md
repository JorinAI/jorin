# `jorin` - Jorin CLI

<p align="center">
  <a href="https://bun.sh"><img src="https://raw.githubusercontent.com/JorinAI/resources/main/logos/icon-and-name-horizontal-small.png" alt="Jorin AI" height=170></a>
</p>
<h1 align="center">Jorin</h1>

## What is Jorin?



**Console command to access and control [Jorin](https://jorin.ai/).**

Jorin is an AI framework and productivity tool designed for power users and developers.
Jorin can collaborate with you on your laptop, your phone,
run in the background to complete a goal or even delegate tasks across other AI agents.

## Install

To install or upgrade:

```bash
curl -fsSL https://jorin.ai/install | bash
```

This will install `jorin` to `$HOME/.jorin/bin` and add it to your path.
You can also manually download a [release from Github](https://github.com/JorinAI/jorin-cli/releases).

## Quick start

```
jorin setup
jorin do "make a tic tac toe game and deploy it live"
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

## Development

Jorin is written in TypeScript. Refer to the [Contributing guide](CONTRIBUTING.md) to start contributing to Jorin.

```bash
git clone https://github.com/JorinAI/jorin-cli
cd jorin-cli
bun install
bun test
bun run src/index.ts
```

`jorin-cli` makes use of:

* [Bun](https://bun.sh/) - a JavaScript runtime
* Cross platform: configstore, env-paths
* CLI: commander, inquirer
* UI: figlet, chalk, gradient-string
* LLMs: Ollama

### Dev Requirements

* [bun](https://bun.sh/)

### Packaging

```bash
make
```

Use `make -B` to force.

This will create a single file executable `dist/jorin`,
using [Bun's build and compilation](https://bun.sh/docs/bundler/executables).

Packaging requirements:

* bun
* make

## Licence

Refer to the [Licence file](./LICENCE) for licensing information.
