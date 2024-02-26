import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllUser = createAsyncThunk("/fetchUser", (id) => {
  console.log("-----------  id----------->", id)
  return axios({
    method: "get",
    url: "https://fakestoreapi.com/users",
  }).then((res) => {
    console.log("res", res);
    return res.data;
  });
});

const userSlice = createSlice({
  name: "user",
  initialState: { user: [], pending: false, errorMsg: "" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.pending = false;
      })
      .addCase(fetchAllUser.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(fetchAllUser.rejected, (state, action) => {
        state.errorMsg = action.error.message;
        state.pending = false;
      });
  },
});

export default userSlice.reducer;
