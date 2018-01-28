import React from 'react';
import PropTypes from 'prop-types'

import Todo from './Todo';

const propTypes = {
    todos: PropTypes.object,
    toggleTodo: PropTypes.func,
    deleteTodo: PropTypes.func,
}

const TodoList = ({todos, toggleTodo, deleteTodo}) => (
    <div>
        {
            Object.keys(todos)
                .map(key => todos[key])
                .map((todo, index) => (
                    <Todo
                        key={index}
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
