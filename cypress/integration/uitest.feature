Feature: Test Ui application for proof of concept

Scenario: Open an application and perform actions

    Given I launch application
    Then I should be in the landing page
    When I login to the application         
    Then I should see the home page
    When I take a screenshot
    When I log out of the application
    Then I should be in the landing page
    When I take a screenshot
