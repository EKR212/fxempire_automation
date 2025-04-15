function handleCaptchaIfPresent(selector = '#g-recaptcha-response') {
    cy.get('body').then($body => {
      if ($body.find(selector).length > 0) {
        cy.log('CAPTCHA detected — force fail this test')
        expect(false).to.equal(true) //force fail

      } else {
        cy.log('No CAPTCHA detected — proceeding with test')
      }
    })
  }