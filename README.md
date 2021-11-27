# cypress-e2e-tests

[![Cypress parallel Tests](https://github.com/ISanjeevKumar/cypress-e2e-tests/actions/workflows/node.js.yml/badge.svg)](https://github.com/ISanjeevKumar/cypress-e2e-tests/actions/workflows/node.js.yml)


Cypress e2e tests using page object model design patterns.

Also, integrated multi-reporter to publish HTML and junit report.


# Challenges Faced:

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


