import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I add a new todo with text {string}', (text) => {
    cy.get('input[placeholder="Add a new todo"]').type(text);
    cy.get('button[type="submit"]').click();
});

When('I delete the todo with text {string}', (text) => {
    cy.contains(text).parent().find('button').contains('Delete').click();
});

Then('I should not see {string} in the todo list', (text) => {
    cy.contains(text).should('not.exist');
});