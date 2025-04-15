describe('FX Empire Login Test', () => {
  beforeEach(() => {
    cy.visit('https://www.fxempire.com/')
  })

  it('should open the login form', () => {
    cy.get('[data-cy="user-login-button"]').click() // Open the login menu

    
    cy.get('[mode="login"]').should('be.visible') // Ensure the login form is visible
  })

  it('should log in with valid credentials', () => {
    cy.get('[data-cy="user-login-button"]').click() // Open the login menu

    // Input valid credentials
    cy.get('[data-cy="login-email-input"]').type('einavkr212@gmail.com') 
    cy.get('[data-cy="login-password-input"]').type('testPassword')  

    // Submit the form
    cy.get('[data-cy="login-submit-button"]').click()

    // Check if the login was successful
    //cy.get('.user-profile').should('be.visible') 
  })
})