const cypress = require('cypress')
const { merge } = require('mochawesome-merge')
const fse = require('fs-extra')
const generator = require('mochawesome-report-generator')
const yargs = require('yargs')

const options = {
    reportDir: 'TestReports',
    files: ["TestReports/*.json"],
    showPending: false
}
const argv = yargs.options({
    'browser': {
        alias: 'b',
        describe: 'choose browser that you wanna run tests on',
        default: 'chrome',
        choices: ['chrome', 'electron', 'firefox', 'edge']
    }
}).help()
    .argv

async function runTests() {
    await fse.remove('TestReports');
    const testRun = await cypress.run({
        browser: argv.browser,
        headless: true,
        spec: argv.spec
    })
    const totalFailed = testRun['totalFailed']
    const jsonReport = await merge(options)
    await generator.create(jsonReport, options);
    process.exit(totalFailed);
}

runTests()