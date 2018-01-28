import React, { Component } from 'react';
import PropTypes from 'prop-types'

const propTypes = {
    addTodo: PropTypes.func,
}

class AddTodoGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoTitle: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({ todoTitle: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addTodo(this.state.todoTitle);
        this.setState({ todoTitle: '' })
    }

    render() {

        return (
            <form
                className="add-todo-group"
                onSubmit={this.handleSubmit}
            >
                <input
                    className="add-todo-text"
                    type="text"
                    name="addTodo"
                    placeholder="Enter a todo title ..."
                    value={this.state.todoTitle}
                    onChange={this.handleInputChange}
                />
                <button
                    disabled={!this.state.todoTitle}
                    className="add-todo-button"
                >
                    Add {this.state.todoTitle}
                </button>
            </form>
        );
    }
}

export default AddTodoGroup;
