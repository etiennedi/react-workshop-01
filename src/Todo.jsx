// @flow

import React from 'react';

type Props = {
  id: number | string,
  completed: boolean,
  title: string,
  toggleTodo: Function,
  deleteTodo: Function
}

const Todo = ({ completed, title, id, toggleTodo, deleteTodo } : Props) => (
  <div className={completed ? 'todo todo-checked' : 'todo'}>
    <input
      className="checkbox"
      name={`todo_${id}`}
      type="checkbox"
      checked={completed}
      onChange={() => { toggleTodo(id); }}
    />
    <label
      className="todo-text" htmlFor={`todo_${id}`}
    >
      {title}
    </label>
    <button
      className="todo-delete"
      onClick={() => deleteTodo(id)}
    >
            ✕
        </button>
  </div>

);

export default Todo;
