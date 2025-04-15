//import handleCaptchaIfPresent from handleCaptchaIfPresent
//let handleCaptchaIfPresent = require('.\helpers\helpfunc.js')

describe('FX Empire Login Test', () => {
  beforeEach(() => {
    cy.visit('https://www.fxempire.com/')
    cy.get('[data-cy="user-login-button"]').click() // Open the login menu
  })

  it('should open the login form', () => {
    cy.get('[mode="login"]').should('be.visible') // Ensure the login form is visible
  })

  it('should log in with valid credentials', () => {
    // Input valid credentials
    cy.get('[data-cy="login-email-input"]').type('einavkr212@gmail.com') 
    cy.get('[data-cy="login-password-input"]').type('testPassword')  

    // Submit the form
    cy.get('[data-cy="login-submit-button"]').click()

    // Check if the login was successful
  })

  it('should display error for invalid credentials', () => {
    // Input invalid credentials
    cy.get('[data-cy="login-email-input"]').type('incorectEmail@gmail.com') 
    cy.get('[data-cy="login-password-input"]').type('incorectPassword')  

    // Submit the form
    cy.get('[data-cy="login-submit-button"]').click()

    // Verify that an error message is shown
    cy.get('[data-cy="email-password-not-match"]').should('be.visible') 
  })

  it('should display error for invalid email', () => {
    // Input invalid credentials
    cy.get('[data-cy="login-email-input"]').type('incorect email format') 
    cy.get('[data-cy="login-password-input"]').click()

    // Verify that an error message is shown
    cy.contains('Please enter your email address in format: name@example.com')
  })
})