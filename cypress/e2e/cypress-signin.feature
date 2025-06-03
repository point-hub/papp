Feature: Authentication

  Scenario: User successfully signs in to app
    Given I visit "/auth/signin"
    When I type "admin" into "username" field
    And I type "password" into "password" field
    And I click "Signin" button
    Then I redirected to "/" page
