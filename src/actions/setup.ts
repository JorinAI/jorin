import { error, warning, info } from '../utils/chalkStyles';
const gradient = require('gradient-string');
import figlet from 'figlet';

export default () => {
        
    console.log(gradient.summer.multiline(figlet.textSync('Jorin.ai', {
        font: 'ANSI Shadow',
        horizontalLayout: 'controlled smushing',
        verticalLayout: 'controlled smushing',
    })));


    console.log('Running setup');
    // Setup logic here
}