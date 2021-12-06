import { current } from "@reduxjs/toolkit";
import firebase from "firebase";

const userApi = {
  getMe: () => {
    return new Promise((resolve, reject) => {
      reject(new Error("MY CUSTOM ERROR"));

      setTimeout(() => {
        const currentUser = firebase.auth().currentUser;

        resolve({
          id: currentUser.uid,
          name: currentUser.displayName,
          email: currentUser.email,
          photoUrl: currentUser.photoUrl,
        });
      }, 500);
    });
  },
};

export default userApi;
