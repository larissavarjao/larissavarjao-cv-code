import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import HomeEnglish from '../HomeEnglish';
import HomePortuguese from '../HomePortuguese';

require('./style.scss');

const App = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/en" />} />
      <Route path="/en" component={HomeEnglish} />
      <Route path="/pt" component={HomePortuguese} />
    </Switch>
  </React.Fragment>
);

export default hot(module)(App);
