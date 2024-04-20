import { Command } from 'commander';
import chalk from 'chalk';

const error = chalk.bold.underline.red;
const warning = chalk.italic.inverse.hex('#FFA500'); // Orange color

const gradient = require('gradient-string');


import figlet from 'figlet';


// console.log(gradient.summer.multiline(figlet.textSync('Jorin.ai', {
//     font: 'ANSI Shadow',
//     horizontalLayout: 'controlled smushing',
//     verticalLayout: 'controlled smushing',
// })));

console.log(gradient.summer.multiline(figlet.textSync('J O R I N . A I', {
    font: 'Calvin S',
    horizontalLayout: 'default',
    verticalLayout: 'default',
})));


const program = new Command();

program.name('jorin').description('Jorin AI client for managing tasks, sessions, and agents.')
    .version('0.0.1');

program
    .option('-l, --llm <llm>', 'Specify a Large Language Model')
    .option('-hub <url>', 'Specify a Jorin Hub URL')
;

const tasks = program.command('tasks').description('Create, list, watch and manage tasks');

tasks.command('list')
  .description('List all tasks')
  .action(() => {
    console.log('Listing tasks');
    console.log(error('Error!'));
    console.log(warning('Warning!'));

    // List tasks logic here
  });

tasks.command('watch <id>')
  .description('Start watching a specific task')
  .action((id) => {
    console.log(`Watching task ID: ${id}`);
    // Task watching logic here
  });

tasks.command('new <description>')
  .description('Adds a task to the hub and returns the ID')
  .option('--watch', 'Watch task execution')
  .option('--agent <id>', 'Specify agent ID to use')
  .option('--agent-foo <options>', 'Configure agent-specific options, like --agent-llm')
  .action((description, options) => {
    console.log(`Adding task: ${description}`);
    console.log(options);
    // Add task logic here
  });

// Alias command for 'do' as shortcut to create a task with watch enabled
program.command('do <task>')
  .description('Alias for task new --watch')
  .action((task) => {
    console.log(`Executing task: ${task} with watching enabled`);
    // Equivalent task creation logic here
  });


const sessions = program.command('sessions').description('Session management');

sessions.command('new')
  .description('Create a new session')
  .option('--agent <id>', 'Specify an agent for the session')
  .action((options) => {
    console.log('Starting new session');
    console.log(options);
    // Session creation logic here
  });

sessions.command('exec')
  .description('Execute a command in a session')
  .action(() => {
    console.log('Executing command in session');
    // Command execution logic here
  });


const agents = program.command('agents').description('Agent management');

agents.command('list')
  .description('List all agents')
  .action(() => {
    console.log('Listing agents');
    // List agents logic here
  });

agents.command('make')
  .description('Create and spawn a new agent')
  .option('--llm-api', 'Specify LLM API settings')
  .option('--type <type>', 'Type of agent, e.g., openai-functions')
  .option('--env <env>', 'Specify environment settings')
  .option('--system-prompt <prompt>', 'System prompt for agent')
  .option('--dir <workingDir>', 'Working directory for the agent')
  .action((options) => {
    console.log('Making new agent');
    console.log(options);
    // Agent creation logic here
  });

// Setup command for initial configuration
program.command('setup')
  .description('Starts the hub and configures if not already set up')
  .action(() => {
    console.log('Running setup');
    // Setup logic here
  });

program.parse(process.argv);
