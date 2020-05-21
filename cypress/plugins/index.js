const percyHealthCheck = require('@percy/cypress/task');

module.exports = (on) => {
  on('task', percyHealthCheck);

  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.name === 'chrome') {
      launchOptions.args.push('--window-size=1920,1080');
      return launchOptions;
    }
  });

  on('task', {
    log(message) {
      console.log(message)

      return null
    },
    table(message) {
      console.table(message)

      return null
    }
  })
};
