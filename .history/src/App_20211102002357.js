import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

const Photo = React.lazy(() => import("./features/Photo"));

function App() {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
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
