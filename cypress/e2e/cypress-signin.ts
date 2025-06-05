import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

Given('I visit {string}', (path: string) => {
  cy.visit(path)
})

When('I type {string} into {string} field', (value: string, selector: string) => {
  cy.get(`[data-testid="${selector}"]`).type(value)
})

When('I click {string} button', (selector: string) => {
  cy.get(`[data-testid="${selector}"]`).click()
})

Then('I redirected to {string} page', (value: string) => {
  cy.url().contains(value)
})
