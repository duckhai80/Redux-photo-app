import React from "react";
import PropTypes from "prop-types";
import firebase from "firebase";

SignIn.propTypes = {};

const uiConfig = {
  signInFlow: "popup",
  singInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FavebookAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

function SignIn(props) {
  return (
    <div>
      <div className="text-center">
        <h2>Login Form</h2>
        <p>or login with social accounts</p>
      </div>
    </div>
  );
}

export default SignIn;
