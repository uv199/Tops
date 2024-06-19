import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIinstance } from "../../UI/Api/axiosConfig";

export let fetchCartApi = createAsyncThunk("fetchCart", (token) => {
  console.log("-----------  token----------->", token);
  return APIinstance.get("/cart/getAll", {
    headers: {
      authorization: "bearer " + token,
    },
  }).then((res) => {
    console.log("---->", res);
    return res.data;
  });
});

let cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [], cartId: "" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCartApi.fulfilled, (state, action) => {
      console.log("-----------  action----------->", action.payload);
      state.cart = action.payload.data;
      state.cartId = action.payload.cartId;
    });
  },
});

export default cartSlice.reducer;
