Feature: Submit data

  Scenario: Navigate sidebar menu
    Given I visit page "/"
    When I click menu "menu-nested-page"
    And I click menu "submenu-nested-page-1"
    And I click menu "submenu-nested-page-2"
    And I click menu "submenu-nested-page-3"
    And I click menu "submenu-nested-page-4"
    And I click menu "submenu-nested-page-5"

  Scenario: Successfully submit data
    Given I visit page "/"
    # Click Menu
    When I click menu "menu-cypress-selector"
    # Input Text
    When I type "Hello World" into "input-text"
    # Input Textarea
    When I type "Hello World" into "input-textarea"
    # Input Mask
    And I type "4242424242424242" into "input-mask"
    # Input Number
    And I type "25" into "input-number"
    # Input Date
    And I type "2025-01-01" into "input-date"
    # Choosen
    And I click choosen "choosen-button"
    And I type "Charles" into "choosen-search"
    And I click choosen "choosen-option-0"
    # Autocomplete
    And I type "kenton" into "autocomplete-input"
    And I click autocomplete "autocomplete-option-0"
    # Select
    And I click select "select-button"
    And I click select "select-option-0"
    # File Upload
    And I click upload "image.png" into "file-upload"
    # Radio
    And I click radio button "radio-1"
    # Switch
    And I click switch "switch"
    # Input Checkbox
    And I click checkbox "input-checkbox"
    # Range
    And I change "25" into "input-range"
    # Button
    And I click button "submit-button"
    # Notification
    Then I see "Submit Success" in "notification"
