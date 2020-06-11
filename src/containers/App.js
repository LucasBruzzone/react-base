import React from 'react';
import { Provider } from 'react-redux';

import Routes from '../routes';

import store from '../redux/store';

import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Routes />
    </div>
  </Provider>
);

export default App;
