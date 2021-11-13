const locators = {
    EMAIL_INPT: '#email',
    PASSWORD_INPT: '#password',
    LOGIN_BTN: '#loginButton',
    ERROR_TOAST: '.error'
}

function login(username, password) {
    cy.get(locators.EMAIL_INPT).type(username)
    cy.get(locators.PASSWORD_INPT).type(password)
    cy.get(locators.LOGIN_BTN).click()
    console.log(`Logging in with ${username}`)
}

function verifyErrorMessage(errorMessage) {
    cy.get(locators.ERROR_TOAST).should('not.be.empty')
        .and('contain.text', errorMessage)
}

module.exports = {
    login,
    verifyErrorMessage
}