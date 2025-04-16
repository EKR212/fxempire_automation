class HomePage {
    constructor() {
      this.selectors = {
        searchBar: '[data-name="main search"]',
        searchResults: '.sc-9d6df5b3-0.jJiqfr',
        loginButton: '[data-cy="user-login-button"]'
      }
    }
  
    // Actions
    typeInSearch(searchQuary) {
      cy.get(this.selectors.searchBar).type(`${searchQuary}{enter}`)
    }
  
    getSearchResults() {
      // Use the class selector for the search results
      return cy.get(this.selectors.searchResults).as('searchResults')
    }
  
    openLoginModal() {
        cy.get(this.selectors.loginButton).click()
    }
  
  }
  
  export const homePage = new HomePage()