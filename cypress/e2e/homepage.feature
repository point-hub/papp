Feature: Access Homepage

  Scenario: Visit homepage
    When I visit "/"
    Then I should be redirected to "/example/home"
    And I should be able to see "Home"
