import React from 'react';
import { Provider } from 'react-redux';

import store from '../redux/store';

import HomePage from './Homepage';

import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <HomePage />
    </div>
  </Provider>
);

export default App;
