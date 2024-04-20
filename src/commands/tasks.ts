import { Command } from 'commander';
import { error, warning, info } from '../utils/chalkStyles';

const tasks = new Command('tasks').description('Create, list, watch and manage tasks');

tasks.command('list')
  .description('List all tasks')
  .action(() => {
    console.log(info('Listing tasks'));
    console.log(error('Error!'));
    console.log(warning('Warning!'));
  });

tasks.command('watch <id>')
  .description('Start watching a specific task')
  .action((id) => {
    console.log(info(`Watching task ID: ${id}`));
  });

tasks.command('new <description>')
  .description('Adds a task to the hub and returns the ID')
  .option('--watch', 'Watch task execution')
  .option('--agent <id>', 'Specify agent ID to use')
  .option('--agent-foo <options>', 'Configure agent-specific options, like --agent-llm')
  .action((description, options) => {
    console.log(info(`Adding task: ${description}`));
    console.log(options);
  });

const doCmd = new Command('do').description('Alias for task new --watch')
    .action((task) => {
        console.log(`Executing task: ${task} with watching enabled`);
        // Equivalent task creation logic here
    });

export {tasks, doCmd}
