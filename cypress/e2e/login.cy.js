const { skipTestIfRecaptchaExists } = require("../helpers/utils")
import { correctEmail, correctPassword, incorrectEmail, incorrectEmailFormat, incorrectEmailFormatError, pageURL } from '../helpers/consts.js'
import {homePage} from '../pages/homePage.js'
import { loginPage } from '../pages/loginPage.js'

describe('FX Empire Login Test', () => {
  beforeEach(() => {
    cy.visit(pageURL)
    homePage.openLoginModal()
  })

  it('should open the login form', () => {
    cy.get(loginPage.selectors.loginMode).should('be.visible') // Ensure the login form is visible
  })

  it('should log in with valid credentials', () => {
    loginPage.login(correctEmail, correctPassword)
  })

  it('should display error for invalid credentials', () => {
    loginPage.login(incorrectEmail, incorrectEmail)
    skipTestIfRecaptchaExists()

    // Verify that an error message is shown
    cy.get(loginPage.selectors.errorMessageEmailPaasswordNotMatch).should('be.visible') 
  })

  it('should display error for invalid email', () => {
    loginPage.typeEmail(incorrectEmailFormat)
    cy.get(loginPage.selectors.passwordInputBar).click()

    // Verify that an error message is shown
    cy.contains(incorrectEmailFormatError)
  })
})