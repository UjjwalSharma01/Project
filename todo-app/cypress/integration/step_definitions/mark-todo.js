import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I add a new todo with text {string}', (text) => {
    cy.get('input[placeholder="Add a new todo"]').type(text);
    cy.get('button[type="submit"]').click();
});

When('I mark the todo with text {string} as completed', (text) => {
    cy.contains(text).parent().find('button').contains('Complete').click();
});

Then('I should see {string} marked as completed', (text) => {
    cy.contains(text).parent().should('have.css', 'text-decoration', 'line-through');
});