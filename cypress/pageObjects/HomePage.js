/// <reference types="Cypress"/>
const {actions,common} = require('../helpers/cypressHelper')

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
    common.log(`Navigated to ${applicationUrl}`)
}

function navigateToLoginPage() {
    actions.clickOnElement(locators.ACCOUNT_LINK)
    actions.clickOnElement(locators.LOGIN_BTN)
}

function navigateToCustomerFeedbackPage() {
    actions.clickOnElement(locators.CUSTOMER_FEEDBACK_LINK)
}

function dismissCooKies() {
    actions.clickOnElement(locators.DISMISS_COOKIES_BTN)
}

function closeWelcomeBanner() {
    actions.clickOnElement(locators.WELCOME_BANNER_BTN)
}

function openSideMenu() {
    actions.clickOnElement(locators.OPEN_SIDENAV_BTN)
}

module.exports = {
    visit,
    navigateToLoginPage,
    dismissCooKies,
    closeWelcomeBanner,
    openSideMenu,
    navigateToCustomerFeedbackPage
}