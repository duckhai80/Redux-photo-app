const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  name: "User",
  initialState: {
    current: {},
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {},
});

const { reducer: userReducer, actions } = userSlice;

export default userReducer;
