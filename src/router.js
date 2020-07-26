import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';

// custom components
import Main from './routes/Main';
import New from './routes/New';
import Fill from './routes/Fill';
import Err404 from './routes/Exception/Err404';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/new' component={New} />
        <Route exact path='/fill' component={Fill} />
        <Route exact path='/404' component={Err404} />
        <Route render={() => (
          <Redirect to='/404' />
        )}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
