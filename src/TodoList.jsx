// @flow

import React from 'react';

import Todo from './Todo';

type Props = {
    todos: Array<*>,
    toggleTodo: Function,
    deleteTodo: Function,
};

const TodoList = ({ todos, toggleTodo, deleteTodo } : Props) => (
  <div>
    {
      todos
        .map(todo => (
          <Todo
            key={todo.id}
            completed={todo.completed}
            title={todo.title}
            id={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))
      }
  </div>
);

export default TodoList;
