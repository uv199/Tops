import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let loginApi = createAsyncThunk("userLogin", (data) => {
  return axios({
    method: "post",
    url: "http://localhost:9999/user/signin",
    data,
  }).then((res) => {
    return res.data.data;
  });
});

const userSlice = createSlice({
  name: "user",
  initialState: { user: {}, pending: false, error: "" },
  reducers: {
    addUser: (state, action) => {
      // logic
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginApi.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(loginApi.fulfilled, (state, action) => {
        console.log("-----------  action----------->", action)
        state.user = action.payload;
        state.pending = false;
      })
      .addCase(loginApi.rejected, (state, action) => {
        console.log("-----------  action----------->", action?.error.message);
        state.error = action?.error?.message;
        state.pending = false;
      });
  },
});

export default userSlice.reducer;
export const { addUser } = userSlice.actions;
