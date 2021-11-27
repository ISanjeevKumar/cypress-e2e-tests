import { HomePage } from '../../../pageObjects/App'

describe('Customer feedbacks', function () {

    this.beforeEach('Navigate to application', function () {
        HomePage.visit(Cypress.env('baseUrl'));
    })

    it('customer should be able to provide feedback', function () {
        HomePage.openSideMenu()
        HomePage.navigateToCustomerFeedbackPage()
    })

})