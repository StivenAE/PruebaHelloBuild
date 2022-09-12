const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions:{
    charts: true,
    reportPageTitle: 'StivenAE Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    
    async setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

        

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
    
      return config;
      

    },
    
    specPattern:"cypress/e2e/features/*.feature",
    baseUrl:"https://www.google.com/?hl=es",
    chromeWebSecurity:false,
  },
  
});



