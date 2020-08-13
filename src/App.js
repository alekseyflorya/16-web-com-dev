import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Analytics from 'react-router-ga';
import './App.scss';
import DataArray from './components/DataArray';
import {NewsListArray} from './components/BlogArray'
import ArticlePage from "./pages/ArticlePage";

export default function App() {

    const Routes = DataArray.map(({id, path, component, exact}, index) => {
        return <Route key={id+index} path={path} exact={exact} render={component} />;
    });

    const BlogRoutes = NewsListArray.map((item) => {
      return <Route key={item.id} path={`/news/${item.postPath}`} render={() => <ArticlePage item={item} />} />;
    });

  return (
    <Router>
      <Analytics id="UA-174264799-1" debug>
        <Switch>
          {Routes}
          {BlogRoutes}
          <Redirect to="/not-found" />
        </Switch>
      </Analytics>
    </Router>
  );
}
