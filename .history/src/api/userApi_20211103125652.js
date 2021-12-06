const userApi = {
  getMe: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          id: "",
          name: "",
          email: "",
        });
      }, 500);
    });
  },
};

export default userApi;
