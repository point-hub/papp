Feature: Create target district

  Background:
    # I logged in as an admin
    Given I visit "/auth/signin"
    When I type "admin" into "username" field
    And I type "password" into "password" field
    And I click "Signin" button
    Then I redirected to "/" page
    # I have permission to access create target district
    Given I visit "/master/role"
    When I click link "admin"
    Then I see checkbox "master-create-target-district" is "checked"

  Scenario: Target district created successfully
    # I navigate to create district page
    When I click sidebar menu "master"
    And I click sidebar menu "target-district"
    And I click button "create-target-district"
    # I fill the fields
    And I type "Dr Soetomo" into "input-district"
    And I type "Tegalsari" into "input-subdistrict"
    And I type "Jl Musi no 21" into "input-address"
    # I submit the data
    And I click button "save-button"
    # I see notification
    Then I see "create success" in "notification"
    # I redirected to list page
    And I see "/master/target-district" in "url"
    # I see new created data in the list
    And I see "Dr Soetomo" in "table-row"
    And I see "Tegalsari" in "table-row"

  Scenario: Target district creation fails because does not have permission
    When I click sidebar menu "master"
    Then I could not see "target-district" in "sidebar-menu"

  Scenario: Target district creation fails because does not fill required field
    # 

  Scenario: Target district creation fails because duplicate unique field value
    # 
