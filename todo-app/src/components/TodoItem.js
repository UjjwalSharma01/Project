import React from 'react';

const TodoItem = ({ todo, index, markTodo, deleteTodo }) => {
  return (
    <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
      {todo.text}
      <button onClick={() => markTodo(index)}>Complete</button>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  );
};

export default TodoItem;