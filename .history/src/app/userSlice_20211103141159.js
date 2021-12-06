const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  name: "User",
  initialState: {
    current: {},
  },
  reducers: {},
});

const { reducer: userReducer, actions } = userSlice;

export default userReducer;
