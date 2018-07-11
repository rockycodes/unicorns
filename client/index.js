import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'
import { Unicorns, Home } from './components'
import store from './store'
import history from './history';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/unicorns" component={Unicorns} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
);