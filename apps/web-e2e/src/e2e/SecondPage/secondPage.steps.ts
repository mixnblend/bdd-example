import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

Given('the user visits the second page', () => {
  cy.visit('second-page')
})

Then('the {string} heading is displayed', (heading: string) => {
  cy.get('h1').contains(heading)
})

When(
  'the {string} link is displayed with the href set to {string}',
  (linkText: string, href: string) => {
    cy.get('a').contains(linkText)
    cy.get('a').contains(linkText).should('have.attr', 'href', href)
  }
)

When('they click on the  {string} link', (linkText: string) => {
  cy.get('a').contains(linkText).click()
})
