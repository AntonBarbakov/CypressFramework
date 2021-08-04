import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'

Given('I open login page', () => {
  LoginPage.visic()
})

When('I submit login', () => {
  LoginPage.fillUsername('username')
  LoginPage.fillPassword('password')
  LoginPage.submit()
})

When('I fill username with {string}', username => {
  LoginPage.fillUsername(username)
})

When('I fill password with {string}', password => {
  LoginPage.fillPassword(password)
})

When('I click on submit', () => {
  LoginPage.submit()
})

Then('I should see homepage', () => {
  cy.get('#account_summary_tab').should('be.visible')
})
