// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


import reducers from './ducks';
import Form from './ContactForm';
import './styles.css';

const store = createStore(reducers, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <Form />
  </Provider>,
  document.getElementById('app-root'),
);
