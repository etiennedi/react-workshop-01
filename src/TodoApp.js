// @flow
import React, { Component } from 'react';

import './styles.css';
import TodoList from './TodoList';
import AddTodoGroup from './AddTodoGroup';
import FilterGroup from './FilterGroup';

type Todo = {
    id: string,
    completed: boolean,
    title: string,
}

type TodoMap = {
    [key:string] : Todo,
}

type State = {
    todos: TodoMap,
    filter: string,
}

class TodoApp extends Component {
    state: State;

    constructor(props: any) {
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
    }

    toggleTodo = (id: string) => {
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

    deleteTodo = (id: string) => {
        const {
            [id]: _,
            ...todosWithoutId
        } = this.state.todos;
        this.setState({ todos: todosWithoutId });
    }

    addTodo = (title: string) => {
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

    setFilter = (filter: string) => {
        this.setState({ filter })
    }

    getFilteredTodos() {
        const { todos, filter } = this.state;

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
                    setFilter={this.setFilter}
                    currentFilter={this.state.filter}
                />
            </div>
        );
    }
}

export default TodoApp;

