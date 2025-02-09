const { defineConfig } = require("cypress");
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  requestTimeout: 6000,
  
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
