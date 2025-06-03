Feature: Create target district

  Scenario: Target district created successfully
    Given the user is logged in to the system
    And the user have permission to access the create target district page
    When the user navigates to the create district page
    And the user enters the data
    And the user submit the form
    Then the user should see a notification
    And the new create target district should be visible in the target district list

  Scenario: Target district creation fails because does not have permission
    Given the user is logged in to the system
    And the user does not have permission to access the create target district page
    When the user navigates to the create district page
    Then the user should not see a create button

  Scenario: Target district creation fails because does not fill required field
    Given the user is logged in to the system
    And the user have permission to access the create target district page
    When the user navigates to the create district page
    And the user enters the data
    And the user submit the form
    Then the user should see a notification
    And the new create target district should not be visible in the target district list

  Scenario: Target district creation fails because duplicate unique field value
    Given the user is logged in to the system
    And the user have permission to access the create target district page
    When the user navigates to the create district page
    And the user enters the data
    And the user submit the form
    Then the user should see a notification
    And the new create target district should not be visible in the target district list
