Feature: Delete Todo

  Scenario: User deletes a todo item
    Given I open the Todo application
    And I add a new todo with text "Buy groceries"
    When I delete the todo with text "Buy groceries"
    Then I should not see "Buy groceries" in the todo list