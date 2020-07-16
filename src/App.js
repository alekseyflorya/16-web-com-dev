import React from 'react';
import { createBrowserHistory } from "history";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import './App.scss';
import DataArray from './components/DataArray';

const hist = createBrowserHistory();

export default function App() {

    const Routes = DataArray.map(({id, path, component, exact}, index) => {
        return <Route key={index} path={path} exact={exact} render={component} />;
    });

  return (
    <Router history={hist}>
      <Switch>
        {Routes}
        <Redirect to="/not-found" />
      </Switch>
    </Router>
  );
}
