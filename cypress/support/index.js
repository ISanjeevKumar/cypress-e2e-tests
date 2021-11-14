// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
const addContext = require('mochawesome/addContext')

Cypress.on('test:after:run', (test, runnable) => {
    console.log('test', test)
    console.log('runnable', runnable)
    if (test.state === 'failed') {
        const attempt = Cypress._.get(cy.state('runnable'), '_currentRetry', 0)
        const suffixScreenshotFile = attempt >= 0 ? `(failed) (attempt ${attempt + 2}).png` : '(failed).png';
        const screenshotFileName = `${runnable.parent.title} -- ${test.title} ${suffixScreenshotFile}`
        console.log('logfile', Cypress.spec.name);
        addContext({
            test
        },
            {
                title: 'ScreenShot',
                value: `assets/${Cypress.spec.name}/${screenshotFileName}`
            },
        )
    }
})
