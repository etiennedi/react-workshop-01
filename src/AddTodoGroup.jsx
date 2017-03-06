// @flow

import React, { Component } from 'react';

type Props = {
    addTodo: Function,
}

type State = {
    todoTitle: string,
}

class AddTodoGroup extends Component {

  constructor(props: Props) {
    super(props);

    this.state = {
      todoTitle: '',
    };
  }

  state: State;
  props: Props;

  handleInputChange = (e: any) => {
    this.setState({ todoTitle: e.target.value });
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.addTodo(this.state.todoTitle);
    this.setState({ todoTitle: '' });
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
