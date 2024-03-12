import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BE_URL } from "../../../config";

export const getAllProduct = createAsyncThunk("fetchProduct", () => {
  return axios({ method: "get", url: BE_URL + "/product/getAll" }).then(
    (resData) => {
      return resData.data;
    }
  );
});

const productSlice = createSlice({
  name: "product",
  initialState: { product: [], error: "", pending: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.fulfilled, (state, action) => {
        console.log("-----------  action.payload----------->", action.payload);
        // state.product = action.payload;
        state.pending = false;
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        action.error;
        state.error = action.error;
        state.pending = false;
      })
      .addCase(getAllProduct.pending, (state, action) => {
        state.pending(true);
      });
  },
});

export default productSlice.reducer;
export const {} = productSlice.actions;
