import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BE_URL } from "../../../config";

export const fetchProduct = createAsyncThunk("getProduct", () => {
  return axios({
    method: "get",
    url: `${BE_URL}/product/getAll`,
  }).then((res) => {
    console.log("res------>", res.data);
    return res.data.data;
  });
});

const productSlice = createSlice({
  name: "product",
  initialState: { products: [], pending: false, error: "" },
  reducers: {
    // getProduct
    addProduct: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.products = action.payload;
        state.pending = false;
      })
      .addCase(fetchProduct.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.error = action.error.message;
        state.pending = false;
      });
  },
});

export default productSlice.reducer;
export const { addProduct } = productSlice.actions;
