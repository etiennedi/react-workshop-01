import React, { PropTypes } from 'react';

const propTypes = {
    addTodo: PropTypes.func,
}

const AddTodoGroup = ({addTodo}) => (
    <form onSubmit={
        e => {
            e.preventDefault();
            addTodo(e.target.addTodo.value);
            e.target.addTodo.value = "";
        }}>
        <input
            type="text"
            name="addTodo"
            placeholder="Enter a todo title"
        />
        <button>Submit</button>
    </form>
);

export default AddTodoGroup;
