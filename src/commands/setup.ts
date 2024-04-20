import { Command } from 'commander';
import setupAction from '../actions/setup';

const setup = new Command('setup')
    .description('Starts the hub and configures if not already set up')
    .option('--clear', 'DANGEROUS: Clear all existing configurations and start fresh')
    .action(setupAction);

export default setup;
