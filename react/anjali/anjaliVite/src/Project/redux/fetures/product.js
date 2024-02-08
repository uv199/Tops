import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ClockFill, CloudSlash } from "react-bootstrap-icons";

export const fetchData = createAsyncThunk("fetchProduct", () => {
  return axios({
    method: "get",
    url: "http://localhost:9999/product/getAll",
    // url: "https://fakestoreapi.com/products",
  }).then((res) => {
    console.log("-----------  res----------->", res.data);
    return res.data.data;
  });
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    topFiveExpensive: [],
    product: [],
    pending: false,
    error: "",
  },
  reducers: {
    getTopFiveExpensive: (state, action) => {
      console.log("--=-=-=-=-=>");
      let filterData = state.product.slice(0, 5);
      console.log("-----------  filterData----------->", filterData);
      state.topFiveExpensive = [{ test: "1234" }];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        console.log("-----------  action----------->", action.payload);
        state.product = action.payload;
        state.pending = false;
      })
      .addCase(fetchData.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = action.error.message;
        state.pending = false;
      });
  },
});

export default productSlice.reducer;
export const { getTopFiveExpensive } = productSlice.actions;
