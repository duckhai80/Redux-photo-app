import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

const Photo = React.lazy(() => import("./features/Photo"));
const AddEdit = React.lazy(() => import("./features/Photo/pages/AddEdit"));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={() => "Loading..."}></Suspense>
    </div>
  );
}

export default App;
