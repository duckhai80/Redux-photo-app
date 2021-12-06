import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";

export const getMe = createAsyncThunk(
  "user/getMe",
  async (params, thunkAPI) => {
    const currentUser = await userApi.getMe();
    return currentUser;
  }
);

const userSlice = createSlice({
  name: "User",
  initialState: {
    current: {},
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getMe.pending]: (action) => {
      state.loading = true;
    },
    [getMe.rejected]: (action) => {},
    [getMe.fulfilled]: (action) => {},
  },
});

const { reducer: userReducer, actions } = userSlice;

export default userReducer;
