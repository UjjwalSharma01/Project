import './commands'; // Make sure this file exists and uses ES module syntax

// You can add global configurations or hooks here
Cypress.on('uncaught:exception', (err, runnable) => {
    // Prevent Cypress from failing the test on uncaught exceptions
    return false;
});