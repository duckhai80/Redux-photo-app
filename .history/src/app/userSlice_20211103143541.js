const { createSlice } = require("@reduxjs/toolkit");

export const getMe = createaAsyncThunk;

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
