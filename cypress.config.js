const { defineConfig } = require("cypress");
module.exports = defineConfig({

  requestTimeout: 30000,

env:{

},

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:"cypress/integration/examples/*.js"
  },
});
