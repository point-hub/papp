import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

Given('I visit page {string}', (path: string) => {
  cy.visit(path)
})

When('I type {string} into {string}', (value: string, selector: string) => {
  cy.get(`[data-testid=${selector}]`).type(value)
})

When('I click checkbox {string}', (selector: string) => {
  cy.get(`[data-testid=${selector}]`).click()
})

When('I click button {string}', (selector: string) => {
  cy.get(`[data-testid=${selector}]`).click()
})

Then('I see {string} in {string}', (value: string, selector: string) => {
  cy.get(`[data-testid=${selector}]`).contains(value)
})
