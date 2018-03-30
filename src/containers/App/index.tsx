import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Home from '../Home';

require('./style.scss');

const App = () => (
  <React.Fragment>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="*" render={() => <Redirect to="/" />} />
    </Switch>
  </React.Fragment>
);

export default hot(module)(App);
