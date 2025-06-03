import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

Given('the user is on the sign-in page', () => {
  cy.visit('/auth/signin')
})

When('the user enters valid login credentials', () => {
  cy.get('[data-testid=username]').type('admin')
  cy.get('[data-testid=password]').type('password')
})

When('submits the sign-in form', () => {
  cy.get('[data-testid=signin-button]').click()
})

Then('the user should be redirected to the home page', () => {
  cy.url().should('include', '/')
})
