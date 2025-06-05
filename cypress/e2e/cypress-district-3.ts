import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

Given('I visit page {string}', (path: string) => {
  cy.visit(path)
})

When('I type {string} into {string}', (value: string, selector: string) => {
  cy.get(`[data-testid="${selector}"]`).type(value)
})

When('I change {string} into {string}', (value: string, selector: string) => {
  cy.get(`[data-testid="${selector}"]`).invoke('val', value).trigger('change')
})

When('I click checkbox {string}', (selector: string) => {
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

When('I click switch {string}', (selector: string) => {
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

When('I click autocomplete {string}', (selector: string) => {
  cy.get(`[data-testid="${selector}"]`).click()
})

When('I click upload {string} into {string}', (value: string, selector: string) => {
  const fileName = value // file in cypress/fixtures
  cy.get(`[data-testid="${selector}"]`).attachFile(fileName)
})

Then('I see {string} in {string}', (value: string, selector: string) => {
  cy.get(`[data-testid="${selector}"]`).contains(value)
})

Then('I see checkbox {string} is {string}', (selector: string, value: string) => {
  cy.get(`[data-testid="${selector}"]`).contains(value)
})

Then('I could not see {string} in {string}', (selector: string, value: string) => {
  cy.get(`[data-testid="${selector}"]`).should('not.contain', value)
})
