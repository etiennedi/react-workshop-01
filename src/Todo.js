import React, { PropTypes } from 'react';

const propTypes = {
    index: PropTypes.number,
    completed: PropTypes.bool,
    title: PropTypes.string,
    toggleTodo: PropTypes.func,
    deleteTodo: PropTypes.func,
};

const Todo = ({ completed, title, index, toggleTodo, deleteTodo }) => (
    <div >
        <input
            name={`todo_${index}`}
            type="checkbox"
            checked={completed}
            onClick={() => { toggleTodo(index) }}
        />
        <label
            htmlFor={`todo_${index}`}
            onClick={() => { toggleTodo(index) }}
        >
            {title}
        </label>
        <button onClick={() => deleteTodo(index)}>Delete me!</button>
    </div>

);

Todo.propTypes = propTypes;

export default Todo;
