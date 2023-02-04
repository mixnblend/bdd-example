@secondPage
Feature: Second page

Scenario: The user visits the second page
  Given the user visits the second page
  Then the "Welcome to the Second Page" heading is displayed
  And the "Go to home page" link is displayed with the href set to "/"

Scenario: The user clicks the second page link
  Given the user visits the second page
  When they click on the  "Go to home page" link
  Then they should be redirected to the url path "/"
