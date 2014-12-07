exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'e2e/*.js'
  ],

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      args: ['--test-type']
    }
  },

  chromeOnly: true,

  baseUrl: 'http://localhost:8000/',

  framework: 'mocha',

  mochaOpts:{
    reporter:'spec',
    slow:3000,
    timeout: 30000
  }
};
