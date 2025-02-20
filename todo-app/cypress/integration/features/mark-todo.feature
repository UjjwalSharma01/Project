Feature: Mark Todo

  Scenario: User marks a todo item as completed
    Given I open the Todo application
    And I add a new todo with text "Buy groceries"
    When I mark the todo with text "Buy groceries" as completed
    Then I should see "Buy groceries" marked as completed