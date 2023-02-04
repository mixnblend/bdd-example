import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('the user visits the {string} page', (path: string) => {
  cy.visit(path)
})

Then('they should be redirected to the url path {string}', (path: string) => {
  cy.location().should((location: Location) => {
    expect(location.pathname).to.eq(path)
  })
})
