class LoginPage {
    constructor() {
      this.selectors = {
        loginMode: '[mode="login"]',
        passwordInputBar: '[data-cy="login-password-input"]',
        emailInput: '[data-cy="login-email-input"]',
        passwordInput: '[data-cy="login-password-input"]',
        submitButton: '[data-cy="login-submit-button"]',
        errorMessageEmailPaasswordNotMatch : '[data-cy="email-password-not-match"]'
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