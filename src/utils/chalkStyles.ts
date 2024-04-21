import chalk from 'chalk';

const styles = {
    error: chalk.bold.underline.red,
    warning: chalk.italic.inverse.hex('#FFA500'), // Orange color
    info: chalk.blue,
    success: chalk.bold.green,
    debug: chalk.dim,
    alert: chalk.bold.yellow,
    note: chalk.italic.hex('#DDDDDD'), // Light grey italic for notes
    data: chalk.bold.hex('#00FF00'), // Bright green for data highlights
    input: chalk.underline.magenta,
    verbose: chalk.cyan.dim,
    prompt: chalk.hex('#FFFFFF').bgBlue, // White text on blue background
    fatal: chalk.bgRed.white.bold, // White text on red background for critical errors
    link: chalk.underline.blueBright,
    title: chalk.bold.underline.hex('#FFFFFF'), // Bold white for titles
    key: chalk.yellow, // For key names in key-value pairs
    value: chalk.hex('#00FFFF'), // Cyan for values
    special: chalk.bold.hex('#FF00FF'), // Magenta for special highlights
    trace: chalk.dim.gray, // For trace logs
    important: chalk.bgYellow.black.bold, // Important notices with black text on yellow background
    muted: chalk.dim.hex('#AAAAAA'), // Dimmed text for muted messages
};

// check if the current file started the process
// note: import.meta.main is always true when the app is compiled so we also check the file name
if (import.meta.main && import.meta.file === 'chalkStyles.ts') {
    // output all styles and their name
    for (const [styleName, style] of Object.entries(styles)) {
        console.log(`${style('This is a test!')}\t${styleName}`);
    }
}

export default styles;
