/// <reference types="Cypress"/>
import { HomePage, LoginPage } from '../../pages/app'

describe('Verify login functionality', function () {

    beforeEach('Navigate to application', function () {
        HomePage.visit(Cypress.env('baseUrl'))

        cy.fixture('login_testdata.json').then((data) => {
            this.data = data;
        })
    })

    it('Verify user should not be able to login with invalid credentials', function () {
        LoginPage.login('this.user.username', 'this.user.password');
        LoginPage.verifyErrorMessage(this.data.invalidUserErrorMessage);
    })

    it('Verify user should be able to login with valid credentials', function () {
        LoginPage.login(this.data.standardUser, this.data.password);
        HomePage.isUserLoggedIn();
    })
})