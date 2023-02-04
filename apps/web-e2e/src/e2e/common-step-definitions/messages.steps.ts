import { Then } from '@badeball/cypress-cucumber-preprocessor'

Then('a message should be displayed saying {string}', (message: string) => {
  cy.get('div').contains(message).should('exist')
})
