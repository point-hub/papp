Feature: Submit data

  Scenario: User successfully submits a completed form
    Given the user is on the home page
    When the user opens the sidebar menu
    And the user enters valid data
    And the user submits the form
    Then the user should see a success message confirming submission
