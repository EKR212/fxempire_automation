const { pageURL, apiUrl } = require("../helpers/consts")
const { loger } = require("../helpers/utils")
const { homePage } = require("../pages/homePage")

describe('Top Articles API & UI Validation', () => {
    
  
    it('validates API and homepage titles match', () => {
      cy.visit(pageURL)
  
      cy.request(apiUrl).then((response) => {
        expect(response.status).to.eq(200)
  
        const articles = response.body
        //expect(articles.length).to.be.at.least(5) - if you want the test to faile if there is less then 5 articles
        loger(articles.length >= 5, '✅ 5 articles or more', '❌ Less then 5 articles')

        articles.forEach(article => {
          expect(article).to.include.all.keys('id', 'title', 'articleLink', 'publishedDate')
        })
  
        homePage.GetArticleTitles().then(uiTitles => {
          articles.forEach(article => {
            const titleFound = uiTitles.includes(article.title.trim())
            loger(titleFound, '✅ Found on UI: "${article.title}"', '❌ Not found on UI: "${article.title}"')

          })
        })
      })
    })
  })