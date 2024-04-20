import { error, warning, info } from '../utils/chalkStyles';
const gradient = require('gradient-string');
import figlet from 'figlet';
import config from '../utils/config';
import { confirm } from '@inquirer/prompts';



export default async (options) => {
    if (options && options.clear && await confirm({ message: 'Continue?' })) {

        console.log(warning('Clearing all configurations'));
        config.clear();
        return;
    }


    console.log(gradient.summer.multiline(figlet.textSync('Jorin.ai', {
        font: 'ANSI Shadow',
        horizontalLayout: 'controlled smushing',
        verticalLayout: 'controlled smushing',
    })));

    console.log('Running setup. You can run this again with `jorin setup`.');

    if (!await confirm({ message: 'Continue?' })) {
        return;
    }

    config.set('isSetup', true);
    console.log('Setup complete. Run `jorin --help` to see available commands.');
}