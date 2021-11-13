/// <reference types="Cypress"/>

import { HomePage } from '../../pageObjects/App'

describe('Verify login functionality', function () {

    this.beforeEach('Navigate to application', function () {
        HomePage.visit(Cypress.env('baseUrl'))
    })

    it('Verify user should not be able to login with invalid credentials', function () {
       HomePage.navigateToLoginPage()
    })
})