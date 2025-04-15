const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          // Set Chrome zoom to 100% (device scale factor)
          launchOptions.args.push('--force-device-scale-factor=1');
        }
        return launchOptions;
      });

      config.viewportWidth = 1920;  // Your screen width
      config.viewportHeight = 1080; // Your screen height
      return config;
    },
  },
});