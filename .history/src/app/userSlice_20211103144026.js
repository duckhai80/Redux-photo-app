import userApi from "api/userApi";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMe = createAsyncThunk(
  "user/getMe",
  async (params, thunkAPI) => {
    const currentUser = await userApi.getMe();
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
  extraReducers: {},
});

const { reducer: userReducer, actions } = userSlice;

export default userReducer;
