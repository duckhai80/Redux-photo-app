import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import MainPage from "./pages/Main";

Photo.propTypes = {};

function Photo(props) {
  const match = useRouteMatch();
  console.log(match);

  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />
      <Route path={`${match.url}/add`} />
      <Route />
      <Route />
    </Switch>
  );
}

export default Photo;
