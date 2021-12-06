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
    [getMe.loading]: (state) => {
      state.loading = true;
    },
    [getMe.rejected]: (state) => {
      state.loading = false;
    },
    [getMe.fulfilled]: (state) => {},
  },
});

const { reducer: userReducer, actions } = userSlice;

export default userReducer;
