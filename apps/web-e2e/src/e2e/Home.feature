@homePage
Feature: Home page

Scenario: The user visits the home page
  Given the user visits the home page
  Then the "Welcome to the BDD demo" heading is displayed
  And the "Go to second page" link is displayed with the href set to "/second-page"

Scenario: The user clicks the second page link
  Given the user visits the home page
  When they click on the  "Go to second page" link
  Then they should be redirected to the url path "/second-page"

