import { Command } from 'commander';
import styles from '../utils/chalkStyles';
import notImplemented from '../utils/notImplemented';

const tasks = new Command('tasks').description('Create, list, watch and manage tasks');

tasks.command('list')
  .description('List all tasks')
  .action(() => {
    notImplemented();
  });

tasks.command('watch <id>')
  .description('Start watching a specific task')
  .action((id) => {
    console.log(styles.info(`Watching task ID: ${id}`));
    notImplemented();
  });

tasks.command('new <description>')
  .description('Adds a task to the hub and returns the ID')
  .option('--watch', 'Watch task execution')
  .option('--agent <id>', 'Specify agent ID to use')
  .option('--agent-foo <options>', 'Configure agent-specific options, like --agent-llm')
  .action((description, options) => {
    console.log(styles.info(`Adding task: ${description}`));
    console.log(options);
    notImplemented();
  });

const doCmd = new Command('do').description('Alias for task new --watch')
    .action((task) => {
        console.log(`Executing task: ${task} with watching enabled`);
        notImplemented();
        // Equivalent task creation logic here
    });

export {tasks, doCmd}
