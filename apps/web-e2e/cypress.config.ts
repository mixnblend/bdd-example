/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from 'cypress'
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset'
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import browserify from '@badeball/cypress-cucumber-preprocessor/browserify'

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__dirname),
    specPattern: '**/*.{feature,features}',
    supportFile: false, // tell cypress you don't have a support file
    baseUrl: 'http://localhost:3000',
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      const options = {
        typescript: require.resolve('typescript'),
      }

      await addCucumberPreprocessorPlugin(on, config)

      on('file:preprocessor', browserify(config, options))
      // Make sure to return the config object as it might have been modified by the plugin.
      return config
    },
  },
})
