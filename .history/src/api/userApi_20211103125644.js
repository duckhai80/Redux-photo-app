const userApi = {
  getMe: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          id: "",
          name: "",
        });
      }, 500);
    });
  },
};

export default userApi;
