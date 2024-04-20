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
    
    console.log('Welcome to Jorin! Let\'s get you set up.');

    console.log('You can run this again at any time with `jorin setup`.');

    if (!await confirm({ message: 'Continue?' })) {
        return;
    }

    // TOOD: ask what LLMs they want to use

    config.set('isSetup', true);
    console.log('Setup complete! Your config has been saved to ' + config.path);
    console.log('Run `jorin --help` to see available commands.');

}