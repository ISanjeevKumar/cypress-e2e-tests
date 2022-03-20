# cypress-e2e-tests

[![Cypress parallel Tests](https://github.com/ISanjeevKumar/cypress-e2e-tests/actions/workflows/node.js.yml/badge.svg)](https://github.com/ISanjeevKumar/cypress-e2e-tests/actions/workflows/node.js.yml)


Cypress e2e tests using page object model design patterns.

Also, integrated multi-reporter to publish HTML and junit report.

## Framework Supports
* Multiple browser automation
* Jenkins Integration
* Failed Screenshots
* Testdata driven tests
* Retries of failed tests
* Parallel Execution on same machine
* Mocha Reports Enabled

## How to run Cypress tests

```
npm run test
```
## Page modules design pattern 

In this each page module exports public functions instead of creating page object and then access the function with the help of page objects like Page pageObjects = new Page();

- Example
  
 Page Module -
 ``` 
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
```
Test layer-
 ```
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

 ```

## Challenges Faced:

  - Error: Webpack Compilation Error

  ```
    Make sure import path is correct on the top of every page objects js file and also compared against the fileName under folder structure not from IDE.
  ```
   - MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 pass listeners added to [Runner]
  ```
    it has been fixed in Cypress 7.0.0
  ```  

   - Invalid: lock file's cypress@6.1.0 does not satisfy cypress@9.0.0
  ```
   After changing the version of cypress manually , do npm install to sync the package.json and packagae.lock.json file.
  ```  


