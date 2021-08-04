Feature: Login to Application

    As a valid user
    I want to log into Application
    
    Scenario: Valid Login
        Given I open login page
        And I wait 2000 milliseconds
        When I fill username with "username"
        And I fill password with "password"
        And I click on submit
        Then I should see homepage

