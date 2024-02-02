const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://magento.softwaretestingboard.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    defaultCommandTimeout: 5432,
    viewportWidth: 990,
    viewportHeight: 650,
  },
});
