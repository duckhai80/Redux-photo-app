import logo from "./logo.svg";
import "./App.css";

import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header></Header>

          <Switch>
            <Redirect exact from="/" to="/photo"></Redirect>
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
