import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BE_URL } from "../../../config";
import axios from "axios";

const initialState = { product: [] };

export const fetchProduct = createAsyncThunk("product/fetchProduct", () => {
  console.log("------fetch data --->");
  return axios
    .get(`${BE_URL}/product/getAll`)
    .then((res) => {
      console.log("res?.data?.data", res?.data?.data);
      return res?.data?.data;
    })
    .catch((err) => console.log(err));
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.product.unshift(payload);
    },
    removeProduct: (state, { payload }) => {
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
