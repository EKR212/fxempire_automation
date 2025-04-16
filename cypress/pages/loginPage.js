class LoginPage {
    constructor() {
      this.selectors = {
        emailInput: '[data-cy="login-email-input"]',
        passwordInput: '[data-cy="login-password-input"]',
        submitButton: '[data-cy="login-submit-button"]',
      }
    }
  
  
    typeEmail(email) {
      cy.get(this.selectors.emailInput).clear().type(email)
    }
  
    typePassword(password) {
      cy.get(this.selectors.passwordInput).clear().type(password)
    }
  
    submitLogin() {
      cy.get(this.selectors.submitButton).click()
    }
  
    login(email, password) {
      this.typeEmail(email)
      this.typePassword(password)
      this.submitLogin()
    }
  
    assertErrorVisible() {
      cy.get(this.selectors.errorMessage).should('be.visible')
    }
  }
  
  export const loginPage = new LoginPage()