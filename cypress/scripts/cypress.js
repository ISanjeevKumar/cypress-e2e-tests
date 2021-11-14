const cypress = require('cypress')
const { merge } = require('mochawesome-merge')
const fse = require('fs-extra')
const generator = require('mochawesome-report-generator')

const options = {
    reportDir: 'TestReports',
    files: ["TestReports/*.json"],
    showPending: false
}

async function runTests() {
    await fse.remove('TestReports');
    const testRun = await cypress.run({
        browser: 'chrome'
    })
    const totalFailed = testRun['totalFailed']
    //const jsonReport = await merge(options)
   // await generator.create(jsonReport, options);
    process.exit(totalFailed);
}

runTests()