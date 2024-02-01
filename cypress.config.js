const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  viewportHeight: 650,
  viewportWidth: 990,

  e2e: {
    // baseUrl: "https://magento.softwaretestingboard.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    defaultCommandTimeout: 10000,
  },
});
