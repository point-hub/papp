Feature: Authentication

  Scenario: User successfully signs in to app
    Given the user is on the sign-in page
    When the user enters valid login credentials
    And submits the sign-in form
    Then the user should be redirected to the home page
