import { error, warning, info } from '../utils/chalkStyles';
const gradient = require('gradient-string');
import figlet from 'figlet';
import config from '../utils/config';
import { confirm } from '@inquirer/prompts';
import db from '../utils/db';
import { unlinkSync } from "node:fs";


export default async (options) => {
    if (options && options.clear && await confirm({ message: 'Clearn config and database?' })) {

        console.log(warning('Clearing all configurations'));
        config.clear();

        console.log(warning('Clearing all database'));
        const dbFile = (await db()).filename;
        unlinkSync(dbFile);
        
        console.log('All configurations and database cleared');
        return;
    }

    console.log(gradient.summer.multiline(figlet.textSync('Jorin.ai', {
        font: 'ANSI Shadow',
        horizontalLayout: 'controlled smushing',
        verticalLayout: 'controlled smushing',
    })));
    
    console.log('Welcome to Jorin! Let\'s get you set up.');

    console.log('You can run this again at any time with `jorin setup`.');

    if (!await confirm({ message: 'Continue?' })) {
        return;
    }

    if (await confirm({ message: 'It looks like you have Ollama running on your local machine. Do you want to use that?' })) {
        config.set('defaultLLM', 'ollama');
    }

    // TOOD: ask what LLMs they want to use


    console.log('Creating database tables...');
    // create "tasks" table with columns: id (int), description (text), status (todo, in_progress, done), created_at, updated_at
    
    const tasks_sql = `CREATE TABLE IF NOT EXISTS tasks (
        id SERIAL PRIMARY KEY,
        description TEXT,
        status TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;
    
    const tasksTable = (await db()).query(tasks_sql).run();
    (await db()).query("INSERT INTO tasks (description, status) VALUES ('test task', 'done')").run();
    console.log('Created tasks table');

    config.set('isSetup', true);
    console.log('Setup complete! Your config has been saved to ' + config.path);
    console.log('Run `jorin --help` to see available commands.');

}