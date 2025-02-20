import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, markTodo, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          markTodo={markTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;