import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open the Todo application', () => {
    cy.visit('/');
});

When('I add a new todo with text {string}', (text) => {
    cy.get('input[placeholder="Add a new todo"]').type(text);
    cy.get('button[type="submit"]').click();
});

Then('I should see {string} in the todo list', (text) => {
    cy.contains(text).should('be.visible');
});