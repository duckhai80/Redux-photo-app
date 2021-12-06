import SignIn from "features/Auth/pages/SignIn";

import firebase from "firebase";
import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import productApi from "./api/productApi";
import "./App.css";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

const Photo = React.lazy(() => import("./features/Photo"));

const config = {
  apiKey: "AIzaSyB3ads-vZGM7LXALUE6awzsl51PxoavyKo",
  authDomain: "photo-app-80aab.firebaseapp.com",
};

firebase.initializeApp(config);

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        };
        const response = await productApi.getAll(params);
        console.log(response);
        setProductList(response.data);
      } catch (error) {
        console.log("Fail to fetch product list: ", error);
      }
    };

    fetchProductList();
  }, []);

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (!user) {
          // handle something here
          console.log("user is not logged in");
          return;
        }

        console.log("Logged in user: ", user.displayName);
        const token = await user.getIdToken();
        console.log("Logged in user token: ", token);
      });
    return () => {
      unregisterAuthObserver();
    };
  }, []);

  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Redirect exact from="/" to="/photos" />

            <Route path="/photos" component={Photo} />
            <Route path="/sign-in" component={SignIn} />
            <Route component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
