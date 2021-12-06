import { current } from "@reduxjs/toolkit";
import firebase from "firebase";

const userApi = {
  getMe: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const currentUser = firebase.auth().currentUser

        resolve({
          id: currentUser.uid,
          name: currentUser.displayName,
          email: "",
          photoUrl: 
        });
      }, 500);
    });
  },
};

export default userApi;
