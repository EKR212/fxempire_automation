const { skipTestIfRecaptchaExists } = require("../helpers/utils")
import {homePage} from '../pages/homePage.js'
import { loginPage } from '../pages/loginPage.js'

describe('FX Empire Login Test', () => {
  beforeEach(() => {
    cy.visit('https://www.fxempire.com/')
    homePage.openLoginModal()
  })

  it('should open the login form', () => {
    cy.get('[mode="login"]').should('be.visible') // Ensure the login form is visible
  })

  it('should log in with valid credentials', () => {
    loginPage.login('einavkr212@gmail.com', 'testPassword')
  })

  it('should display error for invalid credentials', () => {
    loginPage.login('incorectEmail@gmail.com', 'incorectPassword')
    skipTestIfRecaptchaExists()

    // Verify that an error message is shown
    cy.get('[data-cy="email-password-not-match"]').should('be.visible') 
  })

  it('should display error for invalid email', () => {
    loginPage.typeEmail('incorect email format')
    cy.get('[data-cy="login-password-input"]').click()

    // Verify that an error message is shown
    cy.contains('Please enter your email address in format: name@example.com')
  })
})