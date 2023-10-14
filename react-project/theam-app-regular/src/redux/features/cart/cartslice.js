import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BE_URL } from "../../../config";
const initialState = {
  cart: [],
};

export const fetchCardData = createAsyncThunk("cart/fetchData", (token) => {
  return axios({
    method: "get",
    url: `${BE_URL}/cart/getAll`,
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((resData) => {
    console.log("resData-->", resData);
    return resData?.data?.data;
  });
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCardData.fulfilled, (state, { payload }) => {
      console.log("payload", payload);
      state.cart = payload;
    });
  },
});

export default cartSlice.reducer;
