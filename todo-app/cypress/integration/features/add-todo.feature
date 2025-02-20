Feature: Add Todo

  Scenario: User adds a new todo item
    Given I open the Todo application
    When I add a new todo with text "Buy groceries"
    Then I should see "Buy groceries" in the todo list