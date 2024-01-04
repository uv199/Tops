import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BE_URL } from "../../../config";

export const fetchProduct = createAsyncThunk("getProduct", (action) => {
  return axios({
    method: "get",
    url: `${BE_URL}/product/getAllPaginate`,
    params: action,
  }).then((res) => {

    return res.data;
  }).catch((err)=>console.log("------->",err.message));
});

const productSlice = createSlice({
  name: "product",
  initialState: { products: [], pending: false, error: "", count: 0 },
  reducers: {
    // getProduct
    addProduct: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.fulfilled, (state, { payload }) => {
        state.products = payload?.data;
        state.count = payload?.count;
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
