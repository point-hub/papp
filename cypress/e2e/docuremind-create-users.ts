import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

Given('I visit page {string}', (path: string) => {
  cy.visit(path)
})

When('I type {string} into {string}', (value: string, label: number) => {
  cy.contains('label', label).parent().find('input').clear().type(value)
})

When('I click button {string}', (selector: string) => {
  cy.contains(selector).click()
})

When('I click link {string}', (selector: string) => {
  cy.contains('a', selector).click()
})

Then('I see {string}', (value: string) => {
  cy.contains(value).should('be.visible')
})

Then('I redirected to {string}', (value: string) => {
  cy.location('pathname').should('eq', value)
})
