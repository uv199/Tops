import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: [{ name: "urvish", email: "uv@gmail.com", city: "surat" }],
  error: "",
  loading: false,
};

export const fetchAPI = createAsyncThunk("user/fetchUser", () => {
  return axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    console.log("res--->", res);
    return res.data;
  });
});

const userSlice = createSlice({
  name: "user",

  initialState,
  reducers: {},
  extraReducers: (buillder) => {
    buillder.addCase(fetchAPI.fulfilled, (state, action) => {
      state.user = state.user.concat(action.payload);
      state.loading = false;
    });
    buillder.addCase(fetchAPI.pending, (state, action) => {
      state.loading = true;
    });
    buillder.addCase(fetchAPI.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export default userSlice.reducer;
