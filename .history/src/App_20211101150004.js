import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

const Photo = React.lazy(() => import("./features/Photo"));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={() => "Loading..."}>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Redirect exact from="/" to="/photos" />

            <Route path="/photos" component={Photo} />
            <Route component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
