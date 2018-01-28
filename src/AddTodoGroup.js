import React from 'react';
import PropTypes from 'prop-types'

const propTypes = {
    addTodo: PropTypes.func,
}

const AddTodoGroup = ({addTodo}) => (
    <form className="add-todo-group" onSubmit={
        e => {
            e.preventDefault();
            const todo = e.target.addTodo.value;

            if(todo.trim() === '') {
                alert('Please enter a todo title.');
                return;
            }

            addTodo(todo);
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
