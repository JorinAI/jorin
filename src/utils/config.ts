import Configstore from 'configstore';

const defaultConfig = {
    isSetup: false
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