const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  name: "User",
  initialstate: {},
  reducers: {},
});

const { reducer: userReducer, actions } = userSlice;

export default userReducer;
