const percyHealthCheck = require('@percy/cypress/task');

module.exports = (on) => {
  on('task', percyHealthCheck);

  on('before:browser:launch', (browser = {}, args) => {
    if (browser.name === 'chrome') {
      args.push('--window-size=1920,1080');
      return args;
    }
    if (browser.name === 'electron') {
      return {
        width: 1920,
        height: 1080
      };
    }
  });
};
