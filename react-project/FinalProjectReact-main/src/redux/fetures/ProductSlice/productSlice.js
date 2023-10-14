import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BE_URL } from "../../../config";

const initialState = {
  product: [],
  err: "",
  topFiveData: [],
};

export const fetchData = createAsyncThunk("product/fetchData", () => {
  return axios.get(`${BE_URL}product/getAll`).then((resData) => {
    return resData?.data;
  });
});
export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  ({ id, index }) => {
    console.log("id, index", id, index);
    return axios
      .delete(`${BE_URL}product/delete/${id}`)
      .then((resData) => {
        console.log("resData", resData);
        return index;
      })
      .catch((err) => {
        console.log("errr----", err);
      });
  }
);

export const addProduct = createAsyncThunk("product/addProduct", (data) => {
  return axios
    .post(`${BE_URL}product/create`, data, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Barer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
    .then((resData) => {
      console.log("resData", resData);
      return resData?.data;
    })
    .catch((err) => {
      console.log("errr--->", err.message);
    });
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    add: (state, { payload }) => {},
    update: (state) => {},
    topFiveData: (state) => {
      console.log("state--->", state.topFiveData);

      // state.topFiveData=[]
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, { payload }) => {
        state.product = payload?.data;
      })
      .addCase(fetchData.rejected, (state, { payload }) => {
        state.err = "Data not founds...";
      })
      .addCase(addProduct.fulfilled, (state, { payload }) => {
        console.log("payload", payload);
        state?.product?.unshift(payload?.data);
      })
      .addCase(deleteProduct.fulfilled, (state, { payload }) => {
        console.log("payload", payload);
        state.product = state.product.filter((e, i) => i !== payload);
      });
  },
});

export default productSlice.reducer;
export const { add, update, topFiveData } = productSlice.actions;
