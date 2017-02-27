import React, { PropTypes } from 'react';

import Todo from './Todo';

const propTypes = {
    todos: PropTypes.array,
    toggleTodo: PropTypes.func,
    deleteTodo: PropTypes.func,
}

const TodoList = ({todos, toggleTodo, deleteTodo}) => (
    <div>
        {
            todos.map((todo, index) => (
                <Todo
                    key={index}
                    completed={todo.completed}
                    title={todo.title}
                    index={index}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            ))
        }
    </div>
);

export default TodoList;
