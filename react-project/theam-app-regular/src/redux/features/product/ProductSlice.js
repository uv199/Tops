import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BE_URL } from "../../../config";
import axios from "axios";

const initialState = { product: [] };

export const fetchProduct = createAsyncThunk("product/fetchProduct", () => {
  return axios.get(`${BE_URL}/product/getAll`).then((res) => {
    return res?.data?.data;
  });
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.product.unshift(payload);
    },
    removeProduct: (state, { payload }) => {
      console.log("payload", payload);
      state.product.splice(payload, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, { payload }) => {
      console.log("payload", payload);
      state.product = payload;
    });
  },
});
export default productSlice.reducer;
export const { addProduct, removeProduct } = productSlice.actions;
