import React, { Component } from 'react';

import './styles.css';
import TodoList from './TodoList';
import AddTodoGroup from './AddTodoGroup';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [{
                title: 'I am a sample todo',
                completed: false,
            }],
            filter: 'all',
        }

        this.toggleTodo = this.toggleTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    toggleTodo(index) {
        const todos = this.state.todos.slice(0);
        todos[index].completed = !todos[index].completed;
        this.setState({ todos })
    }

    deleteTodo(index) {
        const todos = this.state.todos.slice(0);
        todos.splice(index, 1);
        this.setState({ todos });
    }

    addTodo(title) {
        this.setState({
            todos: [...this.state.todos, {
                title,
                completed: false,
            }]
        });
    }

    render() {
        return (
            <div className="todo-app">
                <h1 className="headline">TODO-App</h1>
                <AddTodoGroup addTodo={this.addTodo} />
                <TodoList
                    todos={this.state.todos}
                    toggleTodo={this.toggleTodo}
                    deleteTodo={this.deleteTodo}
                />
                {/*<FilterGroup />*/}
            </div>
        );
    }
}

export default TodoApp;

