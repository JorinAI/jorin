import { Command } from 'commander';

import {tasks, doCmd} from './commands/tasks';
import sessions from './commands/sessions';
import agents from './commands/agents';
import setup from './commands/setup';
import setupAction from './actions/setup';

import chalk from 'chalk';

const error = chalk.bold.red;
const warning = chalk.italic.inverse.hex('#FFA500'); // Orange color

const gradient = require('gradient-string');

let isSetup = false;

const program = new Command();

program.name('jorin').description('Jorin AI client for managing tasks, sessions, and agents.')
    .version('0.0.1');

program
    .option('-l, --llm <llm>', 'Specify a Large Language Model')
    .option('-hub <url>', 'Specify a Jorin Hub URL')
;

program.action(() => {
  if (isSetup) {
    console.log(gradient.summer('JORIN.AI'));
    console.log(error('Command required'));
    console.log('Try --help for available commands');
    console.log('Learn more about Jorin: https://jorin.ai')
  } else {
    setupAction();
  }
});

program
  .addCommand(tasks)
  .addCommand(doCmd)
  .addCommand(sessions)
  .addCommand(agents)
  .addCommand(setup);

program.parse(process.argv);
