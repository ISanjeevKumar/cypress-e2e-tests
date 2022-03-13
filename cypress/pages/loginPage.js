/// <reference types="Cypress"/>
const {actions} = require('../support/actions')

const locators = {
    EMAIL_INPT: '#user-name',
    PASSWORD_INPT: '[data-test=password]',
    LOGIN_BTN: '#login-button',
    ERROR_TOAST: '[data-test=error]'
}

function login(username, password) {
    actions.log(`Log-in with ${username}`)
    actions.enterText(locators.EMAIL_INPT, username)
    actions.enterText(locators.PASSWORD_INPT, password)
    actions.getWebElement(locators.LOGIN_BTN).click()

}

function verifyErrorMessage(errorMessage) {
    actions.getWebElement(locators.ERROR_TOAST).should('not.be.empty')
        .and('contain.text', errorMessage)
}

module.exports = {
    login,
    verifyErrorMessage
}