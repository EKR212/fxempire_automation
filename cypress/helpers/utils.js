export function skipTestIfRecaptchaExists() {
  cy.wait(4000)

  cy.get('body').then($body => {
    const hasCaptcha = $body.find('[id*="captcha"]').length > 0
    if (hasCaptcha) {
      throw new Error('❌ CAPTCHA detected — failing test')
    } else {
      cy.log('✅ No reCAPTCHA detected — continuing test')
    }
  })
}

  export function generateRandomText(length = 10) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let result = ''
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }

  export function loger(condition, goodResponse, Badresponse){
    if (condition) {
      cy.log(goodResponse)
    } else {
      cy.log(Badresponse)
    }
  }