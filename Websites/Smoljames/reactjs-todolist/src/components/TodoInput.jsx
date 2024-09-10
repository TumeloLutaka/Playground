import React, { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTodo, todoValue, setTodoValue } = props;

  return (
    <header>
      <input
        type="text"
        placeholder="Enter todo..."
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
      />
      <button onClick={() => {
        handleAddTodo(todoValue)
        setTodoValue('')
        }}>Add</button>
    </header>
  );
}
