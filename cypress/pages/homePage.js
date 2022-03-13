/// <reference types="Cypress"/>
const {actions} = require('../support/actions')

function visit(applicationUrl) {
    cy.visit(applicationUrl);
    actions.log(`Navigated to ${applicationUrl}`)
}

function isUserLoggedIn(){
    cy.url().should('contain', 'https://www.saucedemo.com/inventory.html')
}

module.exports = {
    visit,
    isUserLoggedIn
}