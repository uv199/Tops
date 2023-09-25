import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  user: [],
  error: "",
};

export const fethchUser = createAsyncThunk("user/fetchUsers", () => {
  return axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    return res.data.map((user) => user.id);
  });
});

const userslice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fethchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fethchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = "";
    });
    builder.addCase(fethchUser.rejected, (state, action) => {
      state.loading = false;
      state.user = [];
      state.error = action.error.message;
    });
  },
});
export default userslice.reducer;
// export const {fet} = userslice.actions;
