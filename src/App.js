import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { GlobalStyles } from './pages/theme/globalStyles';
import HomeComponent from './pages/home/index';

const AppComponent = () => {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  );
}

export default AppComponent;

