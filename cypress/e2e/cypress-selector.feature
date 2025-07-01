Feature: Submit data

  Scenario: Successfully submit data
    Given I visit page "/"
    # Click Menu
    When I click sidebar menu "menu-cypress-selector"
    # Input Text
    When I type "Hello World" into "input-text"
    # Input Textarea
    When I type "Hello World" into "input-textarea"
    # Input Mask
    And I type "4242556611223399" into "input-mask"
    # Input Number
    And I type "25" into "input-number"
    # Input Date
    And I type "2025-01-01" into "input-date"
    # Choosen
    And I click choosen "choosen-input"
    And I type "Charles" into "choosen-search"
    And I click choosen "choosen-option-3"
    # Select
    And I click select "select-input"
    And I click select "select-option-1"
    # File Upload
    And I upload "image.png" into "file-upload"
    # Radio
    And I click radio button "radio-Value 1"
    # Switch
    And I toggle switch "switch"
    # Input Checkbox
    And I toggle checkbox "input-checkbox"
    # Range
    And I set range "input-range" to "25"
    # Button
    And I click button "submit-button"
    # Notification
    Then I see "Submit Success" in "notification"
