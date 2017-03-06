import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import TodoApp from './TodoApp';
import reducers from './ducks'

const store = createStore(reducers, composeWithDevTools());

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app-root')
);
