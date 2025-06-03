import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

// ✅ Navigation
Given('the user is on the home page', () => {
  cy.visit('/')
})

// ✅ Sidebar
When('the user opens the sidebar menu', () => {
  cy.get('[data-testid=menu-cypress-selector]').click()
})

// ✅ Valid Data Entry – All fields handled here
When('the user enters valid data', () => {
  // Text field
  cy.get('[data-testid=input-text]').type('Hello World')

  // Text area
  cy.get('[data-testid=input-textarea]').type('Hello World')

  // Credit card input
  cy.get('[data-testid=input-mask]').type('4242424242424242')

  // Number input
  cy.get('[data-testid=input-number]').type('25')

  // Date input
  cy.get('[data-testid=input-date]').type('2025-01-01')

  // Choosen (name dropdown)
  cy.get('[data-testid=choosen-button]').click()
  cy.get('[data-testid=choosen-search]').type('Charles')
  cy.get('[data-testid=choosen-option-0]').click()

  // Autocomplete (location)
  cy.get('[data-testid=autocomplete-input]').type('Kenton')
  cy.get('[data-testid=autocomplete-option-0]').click()

  // Select dropdown (category)
  cy.get('[data-testid=select-button]').click()
  cy.get('[data-testid=select-option-0]').click()

  // File upload (profile image)
  cy.get('[data-testid=file-upload]').attachFile('image.png')

  // Radio
  cy.get('[data-testid=radio-1]').click()

  // Switch (notifications)
  cy.get('[data-testid=switch]').click()

  // Checkbox (subscribe)
  cy.get('[data-testid=input-checkbox]').click()

  // Range input (score)
  cy.get('[data-testid=input-range]').invoke('val', 25).trigger('change')
})

// ✅ Submit
When('the user submits the form', () => {
  cy.get('[data-testid=submit-button]').click()
})

// ✅ Confirmation
Then('the user should see a success message confirming submission', () => {
  cy.get('[data-testid=notification]').contains('Submit Success')
})
