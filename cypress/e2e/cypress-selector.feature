Feature: Submit data

  Scenario: Successfully submit data
    Given I visit page "/example/cypress-selector"
    When I type "Hello World" into "input-name"
    And I type "25" into "input-age"
    And I click checkbox "checkbox-agreement"
    And I click button "submit-button"
    Then I see "Submit Success" in "notification"
