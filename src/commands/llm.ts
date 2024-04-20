import { Command } from 'commander';
import ollama from '../llm/ollama';
import config from '../utils/config';

const llms = new Command('llm').description('Manage and interact with Large Language Models directly');

llms.command('list')
.description('List all LLMs')
.action(() => {
    console.log('Listing LLMs');
});

llms.command('send <message>')
.description('Send a message to an LLM')
.option('--llm [ollama]', 'Specify LLM to use', config.get('defaultLLM'))
.action(async (message, options) => {
    console.log(`Sending message to LLM: ${options.llm}`);

    console.log(await ollama(message));
});

export default llms;
