import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Home from '../Home';
// import Cover from '../Cover';

require('./style.scss');

const App = () => (
  <React.Fragment>
    {/* <Header /> */}
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route path="/home" component={Home} />
      {/* <Route path="/cover" component={Cover} /> */}
    </Switch>
  </React.Fragment>
);

export default hot(module)(App);
