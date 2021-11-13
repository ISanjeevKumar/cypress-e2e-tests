/// <reference types="Cypress"/>

import { HomePage, LoginPage } from '../../pageObjects/App'

describe('Verify login functionality', function () {

    before('Test initialization', function(){
        cy.fixture('login_testdata.json')
    })

    this.beforeEach('Navigate to application', function () {
        HomePage.visit(Cypress.env('baseUrl'))
        cy.task('generateUserData').then((userCreds) => {
            this.user = userCreds;
          })

    })

    it('Verify user should not be able to login with invalid credentials', function () {
        HomePage.navigateToLoginPage()
        LoginPage.login(this.user.username,this.user.password)
        LoginPage.verifyErrorMessage('Invalid email or password.')
    })
})