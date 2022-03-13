/// <reference types="Cypress"/>

function getWebElement(locator) {
    cy.log(`Get element with locator value '${locator}''`)
    return cy.get(locator);
}

function enterText(locator, text) {
    cy.log(`Set text ${text} on locator ${locator}`)
    getWebElement(locator).should('be.enabled').type(text)
}

function clickOnElement(locator, options) {
    getWebElement(locator).should('be.visible').click(options)
}

function log(message) {
    console.log('Test step:', message)
    cy.log(`Test step:${message}`)
}

const actions = {
    getWebElement,
    enterText,
    clickOnElement,
    log
}

module.exports = {
    actions
}