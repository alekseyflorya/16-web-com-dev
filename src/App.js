import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import './App.scss';
import DataArray from './components/DataArray';
import NotFound from "./pages/NotFound";

export default function App() {

    const Routes = DataArray.map(({id, path, component, exact}, index) => {
        return <Route key={index} path={path} exact={exact} render={component} />;
    });

  return (
    <Router>
      <Switch>
        {Routes}
        <Redirect to="/not-found" />
      </Switch>
    </Router>
  );
}
