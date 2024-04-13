import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BE_URL } from "../../../config";

export const fetchCart = createAsyncThunk("fetchCart", (token) => {
  console.log("---------api call-------->")
  return axios({
    method: "get",
    url: BE_URL + "/cart/getAll",
    headers: {
      authorization: `bearer ` + token,
    },
  }).then((res) => {
    console.log("-----------  slice res----------->", res.data);
    return res.data;
  });
});

const initialState = { cart: [], cartId: "", error: "", refetch: true };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    refetch: (state) => {
      state.refetch = !state.refetch;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.fulfilled, (state, { payload }) => {
        state.cart = payload.data;
        state.cartId = payload.cartId;
      })
      .addCase(fetchCart.rejected, (state, { error }) => {
        state.error = error.message;
      });
  },
});

export default cartSlice.reducer;
export const { refetch } = cartSlice.actions;
