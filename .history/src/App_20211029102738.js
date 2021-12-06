import logo from "./logo.svg";
import "./App.css";

import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

const Photo = React.lazy(() => import("./features/Photo/pages/Main"));
const AddEdit = React.lazy(() => import("./features/Photo/pages/AddEdit"));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header></Header>

          <Switch>
            <Redirect exact from="/" to="/photos" />

            <Route exact path="/photos" component={Photo} />
            <Route exact path="/photos/add" component={} />
            <Route component={NotFound} />
          </Switch>

          {/* <ul>
            <li>
              <Link to="/photos">Go to photo page</Link>
            </li>
            <li>
              <Link to="/photos/add">Go to Add new photo page</Link>
            </li>
            <li>
              <Link to="/photos/123">Go to Edit photo page</Link>
            </li>
          </ul>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/photos" />
          </Switch> */}
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
