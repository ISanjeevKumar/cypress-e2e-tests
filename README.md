# cypress-e2e-tests


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




