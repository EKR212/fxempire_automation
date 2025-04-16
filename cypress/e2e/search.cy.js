import { goodSearchQuary, noMatchingInstrumentsError, nonExistingSearchQuary, pageURL } from '../helpers/consts.js'
import {homePage} from '../pages/homePage.js'

describe('Search Functionality', () => {
    beforeEach(() => {
      cy.visit(pageURL) 
    })
  
    it('should return relevant results when a search term is entered', () => {
        homePage.typeInSearch(goodSearchQuary) 
        homePage.getSearchResults() 

        // Check that the search results are visible and contain the search term
       cy.get('@searchResults').should('be.visible').and('contain.text', goodSearchQuary)
    })

    it('should return "No matching instruments"', () => {
        homePage.typeInSearch(nonExistingSearchQuary)
        homePage.getSearchResults() 

        // Check that the search results are visible and contain the search term
        cy.get('@searchResults').should('be.visible').and('contain.text', noMatchingInstrumentsError)
    })

  })

