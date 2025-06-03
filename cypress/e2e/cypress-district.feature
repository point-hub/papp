Feature: Master Target District & Subdistrict - create

  Scenario: Admin successfully creates a new district & subdistrict target
    Given the admin is logged into the system
    And the admin navigates to the "Master Target District & Subdistrict" page
    When the admin clicks the "Create New Target" button
    And the admin enters a unique district name
    And the admin enters a unique subdistrict name
    And the admin optionally enters an address
    And the admin enters a required target value for the subdistrict
    And the admin enters a required target outlet for the subdistrict
    And the admin clicks the "Save" button
    Then the system should save the target successfully
    And the system should display a confirmation message "Target has been set successfully"
    And the new target should be visible in the target list
