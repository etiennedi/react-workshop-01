import React, { PropTypes } from 'react';

const propTypes = {
    index: PropTypes.number,
    completed: PropTypes.bool,
    title: PropTypes.string,
    toggleTodo: PropTypes.func,
    deleteTodo: PropTypes.func,
};

const Todo = ({ completed, title, index, toggleTodo, deleteTodo }) => (
    <div className={completed ? 'todo todo-checked' : 'todo'}>
        <input
            className="checkbox"
            name={`todo_${index}`}
            type="checkbox"
            checked={completed}
            onClick={() => { toggleTodo(index) }}
        />
        <label
            className="todo-text"
            htmlFor={`todo_${index}`}
            onClick={() => { toggleTodo(index) }}
        >
            {title}
        </label>
        <button
            className="todo-delete"
            onClick={() => deleteTodo(index)}
        >
            ✕
        </button>
    </div>

);

Todo.propTypes = propTypes;

export default Todo;
