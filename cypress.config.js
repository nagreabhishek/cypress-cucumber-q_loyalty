const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const allureCypress = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      allureCypress(on, config); // Initialize Allure Cypress
      return config;
    },
    env: {
      allureReuseAfterSpec: true,
      allure: true
    },
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: 'https://www.qantasmoney.com'
  },
});