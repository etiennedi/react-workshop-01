import React, { PropTypes } from 'react';

const propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    completed: PropTypes.bool,
    title: PropTypes.string,
    toggleTodo: PropTypes.func,
    deleteTodo: PropTypes.func,
};

const Todo = ({ completed, title, id, toggleTodo, deleteTodo }) => (
    <div className={completed ? 'todo todo-checked' : 'todo'}>
        <input
            className="checkbox"
            name={`todo_${id}`}
            type="checkbox"
            checked={completed}
            onChange={() => { toggleTodo(id) }}
        />
        <label
            className="todo-text"
            htmlFor={`todo_${id}`}
            onClick={() => { toggleTodo(id) }}
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

Todo.propTypes = propTypes;

export default Todo;
