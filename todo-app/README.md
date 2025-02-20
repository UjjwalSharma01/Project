# Todo Application

This is a simple Todo application built with React and tested using Cypress with Cucumber for behavior-driven development (BDD). The application allows users to add, delete, and mark todo items as completed.

## Features

- **Add Todo**: Users can add new todo items to the list.
- **Delete Todo**: Users can delete existing todo items from the list.
- **Mark Todo**: Users can mark todo items as completed.

## Project Structure

```
todo-app
├── cypress
│   ├── fixtures
│   │   └── example.json
│   ├── integration
│   │   ├── features
│   │   │   ├── add-todo.feature
│   │   │   ├── delete-todo.feature
│   │   │   └── mark-todo.feature
│   │   └── step_definitions
│   │       ├── add-todo.js
│   │       ├── delete-todo.js
│   │       └── mark-todo.js
│   ├── plugins
│   │   └── index.js
│   └── support
│       ├── commands.js
│       └── index.js
├── src
│   ├── components
│   │   ├── AddTodo.js
│   │   ├── TodoItem.js
│   │   └── TodoList.js
│   ├── App.js
│   └── index.js
├── cypress.json
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. **Clone the Repository**:
   ```
   git clone <repository-url>
   cd todo-app
   ```

2. **Install Dependencies**:
   ```
   npm install
   ```

3. **Run the Application**:
   ```
   npm start
   ```

4. **Run Tests**:
   To run the Cypress tests, use the following command:
   ```
   npx cypress open
   ```
   This will open the Cypress Test Runner where you can run the tests defined in the `cypress/integration` folder.

## Testing

The application is tested using Cypress and Cucumber. The tests are defined in Gherkin syntax and can be found in the `cypress/integration/features` directory. The step definitions for these tests are located in the `cypress/integration/step_definitions` directory.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or features you would like to add.

## License

This project is licensed under the MIT License.