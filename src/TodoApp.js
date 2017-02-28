import React, { Component } from 'react';

import './styles.css';
import TodoList from './TodoList';
import AddTodoGroup from './AddTodoGroup';
import FilterGroup from './FilterGroup';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: {
                'sample': {
                    title: 'I am a sample todo',
                    completed: false,
                    id: 'sample',
                }
            },
            filter: 'all',
        }

        this.toggleTodo = this.toggleTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.setFilter = this.setFilter.bind(this);
    }

    toggleTodo(id) {
        const todos = this.state.todos;
        this.setState({
            todos: {
                ...todos,
                [id]: {
                    ...todos[id],
                    completed: !todos[id].completed
                },
            }
        })
    }

    deleteTodo(id) {
        const {
            [id]: _,
            ...todosWithoutId
        } = this.state.todos;
        this.setState({ todos: todosWithoutId });
    }

    addTodo(title) {
        const id = Date.now().toString();
        this.setState({
            todos: {
                ...this.state.todos,
                [id]: {
                    title,
                    completed: false,
                    id,
                }
            }
        });
    }

    setFilter(filter) {
        this.setState({ filter })
    }

    getFilteredTodos() {
        const todos = this.state.todos;
        const filter = this.state.filter;

        if (filter === 'all') {
            return todos;
        }

        return Object.keys(todos)
            .map(key => todos[key])
            .filter(todo => todo.completed === (filter === 'completed' && filter !== 'open'))
    }

    render() {
        return (
            <div className="todo-app">
                <h1 className="headline">TODO-App</h1>
                <AddTodoGroup addTodo={this.addTodo} />
                <TodoList
                    todos={this.getFilteredTodos()}
                    toggleTodo={this.toggleTodo}
                    deleteTodo={this.deleteTodo}
                />
                <FilterGroup
                    currentFilter={this.state.filter}
                    setFilter={this.setFilter}
                />
            </div>
        );
    }
}

export default TodoApp;

