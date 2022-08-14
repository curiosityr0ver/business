import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './REDUCERS';
import thunk from 'redux-thunk';
//often reinstalling redux and react-redux makes the app work for the first time

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <App />
  </Provider>
);
