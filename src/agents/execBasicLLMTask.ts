import ollama from '../llm/ollama';
import styles from '../utils/chalkStyles';
import { confirm } from '@inquirer/prompts';
import { $ } from "bun";


const extractCommand = (str) => {
    // Optional "bash" after the backticks
    // Llama3 sometimes puts "bash" on a newline
    const regex = /```\n?(?:bash)?\n(.*?)\n```/s;
    const match = str.match(regex);
    return match ? match[1].trim() : null;
  };
  

const execBasicLLMTask = async (message, options) => {
    console.log(`Sending message to LLM: ollama`);

    const prompt = `Here is a task for you.
You need to turn it into 1 or more shell commands in a block like this:

\`\`\`bash
ls
\`\`\`

IMPORTANT: these commands will be automatically executed on a server.

No need to explain yourself or provide any other output. Just the commands.

Task:
${message}
    `;

    console.log(styles.debug('Prompt to send to LLM:' + prompt));

    const response = await ollama(prompt);

    console.log(styles.verbose(response));

    const cmd = extractCommand(response);

    if (!cmd) {
        console.log(styles.error('No command found'));
        return;
    }

    console.log(styles.debug('Command to execute:'));
    console.log(styles.data(cmd));

    if (!await confirm({ message: 'Execute?' })) {
        return;
    }

    await $`echo ${cmd} | bash`
};

export default execBasicLLMTask;
