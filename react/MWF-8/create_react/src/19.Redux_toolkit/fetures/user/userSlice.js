import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  user: [],
};
export const fetchData = createAsyncThunk("user/fetchUserData", () => {
  return axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    return res.data;
  });
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      console.log("--------->", action.payload);
      state.user = action.payload;
    });
  },
});

export default userSlice.reducer;
