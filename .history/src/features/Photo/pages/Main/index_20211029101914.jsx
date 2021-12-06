import Banner from "components/Banner";
import Images from "constants/images";
import React from "react";
// import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import NotFound from "components/NotFound";

const AddEdit = React.lazy(() => import("../AddEdit"));

MainPage.propTypes = {};

function MainPage(props) {
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <Route to="/photos/add">Add new photo</Route>
        <Switch>
          <Route exact path="/photos/add" component={AddEdit} />
        </Switch>
      </Container>
    </div>
  );
}

export default MainPage;
