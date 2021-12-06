import SignIn from "features/Auth/pages/SignIn";
import firebase from "firebase";
import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Button } from "reactstrap";
import productApi from "./api/productApi";
import "./App.css";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

const Photo = React.lazy(() => import("./features/Photo"));

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
};

firebase.initializeApp(config);

function App() {
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

        // console.log("Logged in user: ", user.displayName);
        // const token = await user.getIdToken();
        // console.log("Logged in user token: ", token);

        const setJson = JSON.stringify(user.providerData);
        localStorage.setItem("firebaseui::rememberedAccounts", setJson);
      });
    return () => {
      unregisterAuthObserver();
    };
  }, []);

  const handleButtonClick = async () => {
    try {
      const params = {
        _page: 1,
        _limit: 10,
      };
      const response = await productApi.getAll(params);
      console.log(response);
    } catch (error) {
      console.log("Fail to fetch product list: ", error);
    }
  };

  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header></Header>
          <Button onClick={handleButtonClick}>Fetch product list</Button>
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
