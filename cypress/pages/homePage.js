class HomePage {
    constructor() {
      this.selectors = {
        searchBar: '[data-name="main search"]',
        searchResults: '.sc-9d6df5b3-0.jJiqfr',
        loginButton: '[data-cy="user-login-button"]',
        latestArticles: '[data-name^="hp_article_"] span'
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

    // Get homepage article titles using data-name pattern
    GetArticleTitles(){
        return cy
        .get(this.selectors.latestArticles, { timeout: 10000 }) // wait for articles
        .should('exist')
        .then($spans => {
          const titles = [...$spans]
            .map(el => el.innerText.replace(/\s+/g, ' ').trim()) // normalize spaces
            .filter(Boolean)
    
          return titles
        })
    }

  
  }
  
  export const homePage = new HomePage()