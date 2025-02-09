const { defineConfig } = require("cypress");
module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  reporter: 'cypress-mochawesome-reporter',

  requestTimeout: 6000,
  responseTimeout: 30000,
  
  retries: {
    runMode: 1,
    //openMode: 0,
    },

env:{},

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:"cypress/integration/examples/*.js"
  },
});
