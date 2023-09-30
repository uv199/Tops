import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("user/fetchUser", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((resData) => resData.data);
});

let userSlice = createSlice({
  name: "user",
  initialState: { user: [], err: "" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state) => {
      state.err = "Data not found";
    });
  },
});

export default userSlice.reducer;
