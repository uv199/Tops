import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BE_URL } from "../../../config";

export const fetchProduct = createAsyncThunk("getProduct", (action) => {
  console.log("-----------  action----------->", action);
  return axios({
    method: "get",
    url: `${BE_URL}/product/getAll`,
    params: action,
  }).then((res) => {
    console.log("-----------   res.data.data----------->", res.data);
    return res.data;
  });
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
