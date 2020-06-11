import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './containers/Homepage';
import SecondScreen from './containers/SecondScreen';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/secondscreen' component={SecondScreen} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
