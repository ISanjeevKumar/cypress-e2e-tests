/// <reference types="Cypress"/>
const { actions, common } = require('../helpers/cypressHelper')

const locators = {
    EMAIL_INPT: '#user-name',
    PASSWORD_INPT: '[data-test=password]',
    LOGIN_BTN: '#login-button',
    ERROR_TOAST: '[data-test=error]'
}

function login(username, password) {
    common.log(`Log-in with ${username}`)
    actions.enterText(locators.EMAIL_INPT, username)
    actions.enterText(locators.PASSWORD_INPT, password)
    cy.get(locators.LOGIN_BTN).click()

}

function verifyErrorMessage(errorMessage) {
    cy.get(locators.ERROR_TOAST).should('not.be.empty')
        .and('contain.text', errorMessage)
}

module.exports = {
    login,
    verifyErrorMessage
}