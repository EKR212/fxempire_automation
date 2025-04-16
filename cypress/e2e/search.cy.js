import {generateRandomText} from '../helpers/utils.js'
import {homePage} from '../pages/homePage.js'

describe('Search Functionality', () => {
    beforeEach(() => {
      cy.visit('https://www.fxempire.com/') // Replace with your website's URL
    })
  
    it('should return relevant results when a search term is entered', () => {
        let searchQuary = 'GOLD'

        homePage.typeInSearch(searchQuary)
        homePage.getSearchResults() 

        // Check that the search results are visible and contain the search term
        return cy.get('@searchResults').should('be.visible').and('contain.text', searchQuary)
    })

    it('should return "No matching instruments"', () => {
        let searchQuary = generateRandomText()

        homePage.typeInSearch(searchQuary)
        homePage.getSearchResults() 

        // Check that the search results are visible and contain the search term
        cy.get('@searchResults').should('be.visible').and('contain.text', "No matching instruments")
    })

  })

