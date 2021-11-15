/// <reference types="Cypress"/>

function getWebElement(locator){
    log(`Get element with locator value '${locator}''`)
    return cy.get(locator);
}

function enterText(locator,text){
  log(`Set text ${text} on locator ${locator}`)
  getWebElement(locator).should('be.enabled').type(text)
}

function clickOnElement(locator, options){
 getWebElement(locator).should('be.visible').click(options)
}

function log(message){
    console.log(message)
    cy.log(message)
}

const common ={
    log
}

const actions = {
    getWebElement,
    enterText,
    clickOnElement
}

module.exports ={
    common,
    actions
}