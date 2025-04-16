import {generateRandomText} from '../helpers/utils.js';

describe('Search Functionality', () => {
    beforeEach(() => {
      cy.visit('https://www.fxempire.com/') // Replace with your website's URL
    })
  
    it('should return relevant results when a search term is entered', () => {
        let searchQuary = 'GOLD'
      // Locate the search input and type a query
      cy.get('[data-name="main search"]').type(searchQuary)
  
        // Use the class selector for the search results
        cy.get('.sc-9d6df5b3-0.jJiqfr').as('searchResults')

        // Check that the search results are visible and contain the search term
        cy.get('@searchResults').should('be.visible').and('contain.text', searchQuary)
    })

    it('should return "No matching instruments"', () => {
        let searchQuary = generateRandomText()
      // Locate the search input and type a query
      cy.get('[data-name="main search"]').type(searchQuary)
  
        // Use the class selector for the search results
        cy.get('.sc-9d6df5b3-0.jJiqfr').as('searchResults')

        // Check that the search results are visible and contain the search term
        cy.get('@searchResults').should('be.visible').and('contain.text', "No matching instruments")
    })

  })

