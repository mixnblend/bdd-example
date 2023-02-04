const path = require('path')

const outputFolder = path.resolve(process.cwd(), '../../cyreport/cucumber-json')

module.exports = {
  nonGlobalStepDefinitions: true,
  filterSpecs: true,
  omitFiltered: true,
  stepDefinitions: [
    'src/e2e/[filepath]/**/*.{js,ts}',
    'src/e2e/[filepath].{js,ts}',
    'src/support/step_definitions/**/*.{js,ts}',
    'src/e2e/common-step-definitions/*.{js,ts}',
  ],
  cucumberJson: {
    generate: true,
    outputFolder: outputFolder,
    filePrefix: '',
    fileSuffix: '.cucumber',
  },
}
