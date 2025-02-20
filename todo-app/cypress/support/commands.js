// This file is used to define custom commands that can be reused in tests.

// Example of a custom command to add a todo
Cypress.Commands.add('addTodo', (todoText) => {
    cy.get('input[name="todo"]').type(todoText);
    cy.get('button[type="submit"]').click();
});

// Example of a custom command to delete a todo
Cypress.Commands.add('deleteTodo', (todoText) => {
    cy.contains(todoText).parent().find('button.delete').click();
});

// Example of a custom command to mark a todo as completed
Cypress.Commands.add('markTodoAsCompleted', (todoText) => {
    cy.contains(todoText).parent().find('input[type="checkbox"]').check();
});