import { Command } from 'commander';
import notImplemented from '../utils/notImplemented';

const sessions = new Command('sessions').description('Session management');

sessions.command('new')
  .description('Create a new session')
  .option('--agent <id>', 'Specify an agent for the session')
  .action((options) => {
    console.log('Starting new session');
    console.log(options);
    // Session creation logic here
    notImplemented();
  });

sessions.command('exec')
  .description('Execute a command in a session')
  .action(() => {
    console.log('Executing command in session');
    // Command execution logic here
    notImplemented();
  });

export default sessions;
