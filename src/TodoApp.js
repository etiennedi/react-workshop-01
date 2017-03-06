import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles.css';
import TodoList from './TodoList';
import AddTodoGroup from './AddTodoGroup';
import FilterGroup from './FilterGroup';
import { addTodo, deleteTodo, toggleTodo } from './ducks/todos'
import { setFilter } from './ducks/filter'

const getFilteredTodos = (todos, filter) => {
    if (filter === 'all') {
        return todos;
    }
    return Object.keys(todos)
        .map(key => todos[key])
        .filter(todo => todo.completed === (filter === 'completed' && filter !== 'open'))
}

const TodoApp = ({
    addTodo,
    deleteTodo,
    toggleTodo,
    setFilter,
    todos,
    filter
}) => (
        <div className="todo-app">
            <h1 className="headline">TODO-App</h1>
            <AddTodoGroup addTodo={addTodo} />
            <TodoList
                todos={getFilteredTodos(todos, filter)}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
            <FilterGroup
                currentFilter={filter}
                setFilter={setFilter}
            />
        </div>
    );

const mapStateToProps = state => ({
    todos: state.todos,
    filter: state.filter,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        addTodo,
        deleteTodo,
        toggleTodo,
        setFilter,
    }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);

