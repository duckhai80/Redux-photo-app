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
    [getMe.loading]: (state) => {},
    [getMe.rejected]: (state) => {},
  },
});

const { reducer: userReducer, actions } = userSlice;

export default userReducer;
