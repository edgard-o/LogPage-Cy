const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  projectId: "61yjrx",
  env: {
    baseUrl: "https://practicetestautomation.com",
    username:"student",
    password:"Password123"
  }
});


