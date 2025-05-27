Feature: Create Users

  Background:
    Given I visit page "https://docuremind-staging.pointhub.app/signin"
    When I type "admin" into "Username"
    And I type "Admin123!" into "Password"
    And I click button "Sign In"
    When I click link "Users"
    And I click button "Create"

  Scenario: Create a user
    And I type "john" into "Username"
    And I type "john@example.com" into "Email"
    And I type "12341234" into "Password"
    And I type "John Doe" into "Name"
    And I type "User" into "Role"
    And I click button "Save"
    Then I redirected to "/users"
    And I see "Users"
    And I see "john@example.com"

  Scenario: Create an admin
    And I type "chris" into "Username"
    And I type "chris@example.com" into "Email"
    And I type "12341234" into "Password"
    And I type "Chris John" into "Name"
    And I type "Admin" into "Role"
    And I click button "Save"
    Then I redirected to "/users"
    And I see "Users"
    And I see "chris@example.com"
