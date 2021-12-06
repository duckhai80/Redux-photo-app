const userApi = {
  getMe: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const currentUser = firebase.auth().currentUse



        
        resolve({
          id: "",
          name: "",
          email: "",
          photoUrl: 
        });
      }, 500);
    });
  },
};

export default userApi;
