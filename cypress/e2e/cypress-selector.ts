import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

Given('I visit page {string}', (path: string) => {
  cy.visit(path)
})

When('I type {string} into {string}', (value: string, selector: string) => {
  cy.get(`[data-testid="${selector}"]`).type(value)
})

When('I set range {string} to {string}', (selector: string, value: string) => {
  cy.get(`[data-testid="${selector}"]`).invoke('val', value).trigger('change')
})

When('I toggle checkbox {string}', (selector: string) => {
  cy.get(`[data-testid="${selector}"]`).click()
})

When('I click button {string}', (selector: string) => {
  cy.get(`[data-testid="${selector}"]`).click()
})

When('I click link {string}', (selector: string) => {
  cy.get(`[data-testid="${selector}"]`).click()
})

When('I click sidebar menu {string}', (selector: string) => {
  cy.get(`[data-testid="${selector}"]`).click()
})

When('I toggle switch {string}', (selector: string) => {
  cy.get(`[data-testid="${selector}"]`).click()
})

When('I click select {string}', (selector: string) => {
  cy.get(`[data-testid="${selector}"]`).click()
})

When('I click radio button {string}', (selector: string) => {
  cy.get(`[data-testid="${selector}"]`).click()
})

When('I click choosen {string}', (selector: string) => {
  cy.get(`[data-testid="${selector}"]`).click()
})

When('I upload {string} into {string}', (file: string, selector: string) => {
  // file in cypress/fixtures
  cy.get(`[data-testid="${selector}"]`).attachFile(file)
})

Then('I see {string} in {string}', (value: string, selector: string) => {
  cy.get(`[data-testid="${selector}"]`).contains(value)
})
