import { executeReducerBuilderCallback } from "@reduxjs/toolkit/dist/mapBuilders";

const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  name: "User",
  initialstate: {},
  reducers: {},
});

const { reducer, actions } = userSlice;

export default executeReducerBuilderCallback;
