const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getMe = createAsyncThunk(
  "user/getMe",
  async (params, thunkAPI) => {}
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
