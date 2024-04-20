import Configstore from 'configstore';

const defaultConfig = {
    isSetup: false,
    llms: [
        {
            name: 'ollama',
            url: 'http://127.0.0.1:11434',
            type: 'openai',
        }
    ],
    defaultLLM: 'ollama',
    hub: {
        url: 'https://hub.jorin.ai',
    }
};

const config = new Configstore('json', defaultConfig, {globalConfigPath: true});

// console.log(config.get('foo'));
//=> 'bar'

// config.set('awesome', true);
// console.log(config.get('awesome'));
//=> true

// Use dot-notation to access nested properties.
// config.set('bar.baz', true);
// console.log(config.get('bar'));
//=> {baz: true}

// config.delete('awesome');
// console.log(config.get('awesome'));
//=> undefined

export default config;