// @flow

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles.css';
import TodoList from './TodoList';
import AddTodoGroup from './AddTodoGroup';
import FilterGroup from './FilterGroup';
import * as todoActions from './ducks/todos';
import * as filterActions from './ducks/filter';

type Props = {
  addTodo: Function,
  deleteTodo: Function,
  toggleTodo: Function,
  setFilter: Function,
  todos: Object,
  filter: string,
}

const getFilteredTodos = (originalTodos: Object, filter: string) : Array<*> => {
  const todos = Object.keys(originalTodos)
    .map(key => originalTodos[key]);

  if (filter === 'all') {
    return todos;
  }
  return todos.filter(todo => todo.completed === (filter === 'completed' && filter !== 'open'));
};

const TodoApp = ({
    addTodo,
    deleteTodo,
    toggleTodo,
    setFilter,
    todos,
    filter,
}: Props) => (
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
    addTodo: todoActions.addTodo,
    deleteTodo: todoActions.deleteTodo,
    toggleTodo: todoActions.toggleTodo,
    setFilter: filterActions.setFilter,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
