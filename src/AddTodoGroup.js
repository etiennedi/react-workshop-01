import React, { PropTypes } from 'react';

const propTypes = {
    addTodo: PropTypes.func,
}

const AddTodoGroup = ({addTodo}) => (
    <form className="add-todo-group" onSubmit={
        e => {
            e.preventDefault();
            addTodo(e.target.addTodo.value);
            e.target.addTodo.value = "";
        }}>
        <input
            className="add-todo-text"
            type="text"
            name="addTodo"
            placeholder="Enter a todo title ..."
        />
        <button className="add-todo-button">Add</button>
    </form>
);

export default AddTodoGroup;
