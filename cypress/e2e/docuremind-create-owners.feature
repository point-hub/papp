Feature: Create Owners

  Scenario: Create an owner
    Given I visit page "https://docuremind-staging.pointhub.app/signin"
    When I type "admin" into "Username"
    And I type "Admin123!" into "Password"
    And I click button "Sign In"
    When I click link "Owners"
    And I click button "Create"
    And I type "aini" into "Name"
    And I click button "Save"
    Then I redirected to "/owners"
    And I see "Name"
    And I see "aini"
