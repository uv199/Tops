import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BE_URL } from "../../../config";

const initialState = {
  products: [],
};

export const fetchProductData = createAsyncThunk("product/fetchProduct", () => {
  return axios.get(`${BE_URL}/product/getAll`).then((resData) => {
    return resData.data;
  });
});

const productSLice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductData.fulfilled, (state, { payload }) => {
      state.products = payload.data;
    });
  },
});

export default productSLice.reducer;
