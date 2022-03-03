/// <reference types="Cypress"/>
const {actions,common} = require('../helpers/cypressHelper')

const locators = {

}

function visit(applicationUrl) {
    cy.visit(applicationUrl);
    common.log(`Navigated to ${applicationUrl}`)
}

function isUserLoggedIn(){
    cy.url().should('contain', 'https://www.saucedemo.com/inventory.html')
}

module.exports = {
    visit,
    isUserLoggedIn
}