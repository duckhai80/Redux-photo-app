import axios from "axios";
import queryString from "query-string";
import firebase from "firebase";

const getFirebaseToken = async () => {
  const currentUser = firebase.auth().currentUser;
  if (currentUser) return currentUser.getIdToken();

  const hasRememberedAccounts = localStorage.getItem(
    "firebaseui::rememberedAccounts"
  );
  if (!hasRememberedAccounts) return null;

  return new Promise((resolve, reject) => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (!user) {
          reject(null);
        }
        l;

        console.log("Logged in user: ", user.displayName);
        const token = await user.getIdToken();
        console.log("Logged in user token: ", token);

        const setJson = JSON.stringify(user.providerData);
        localStorage.setItem("firebaseui::rememberedAccounts", setJson);
      });
  });
};

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { "content-type": "application/json" },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  // const currentUser = firebase.auth().currentUser;
  // if (currentUser) {
  //   const token = await currentUser.getIdToken();
  //   config.headers.Authorization = `Bearer ${token}`;
  // }

  const token = await getFirebaseToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
