const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  name: "User",
  initialstate: {
    current: {},
  },
  reducers: {},
});

const { reducer: userReducer, actions } = userSlice;

export default userReducer;
