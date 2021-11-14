/// <reference types="Cypress"/>

const locators = {
    DISMISS_COOKIES_BTN: 'a.cc-btn.cc-dismiss',
    WELCOME_BANNER_BTN: '.close-dialog',
    ACCOUNT_LINK: '#navbarAccount',
    LOGIN_BTN: '#navbarLoginButton',
    OPEN_SIDENAV_BTN: 'button[aria-label="Open Sidenav"]',
    CUSTOMER_FEEDBACK_LINK:'[routerlink="/contact"] > .mat-list-item-content > .menu-text'
}

function visit(applicationUrl) {
    cy.visit(applicationUrl).then(function () {
        dismissCooKies()
        closeWelcomeBanner()
    })
    console.log(`Navigated to ${applicationUrl}`)
}

function navigateToLoginPage() {
    cy.get(locators.ACCOUNT_LINK).should('be.visible').click()
    cy.get(locators.LOGIN_BTN).should('be.visible').click()
}

function navigateToCustomerFeedbackPage() {
    cy.get(locators.CUSTOMER_FEEDBACK_LINK).should('be.visible').click()
}

function dismissCooKies() {
    cy.get(locators.DISMISS_COOKIES_BTN).should('be.visible').click()
}

function closeWelcomeBanner() {
    cy.get(locators.WELCOME_BANNER_BTN).should('be.visible').click()
}

function openSideMenu() {
    cy.get(locators.OPEN_SIDENAV_BTN).should('be.visible').and('be.enabled').click()
}

module.exports = {
    visit,
    navigateToLoginPage,
    dismissCooKies,
    closeWelcomeBanner,
    openSideMenu,
    navigateToCustomerFeedbackPage
}