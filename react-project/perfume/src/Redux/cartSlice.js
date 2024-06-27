import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceApi } from "../Ui/Api/axiosconfig";

export const fetchCart = createAsyncThunk("fecthCart", (token) => {
  return instanceApi
    .get("/cart/getAll", {
      headers: {
        authorization: "bearer " + token,
      },
    })
    .then((res) => {
      return res.data;
    });
});

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [], pending: false, cartId: "" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        console.log("-----------  action----------->", action.payload);
        state.cart = action.payload.data;
        state.cartId = action.payload.cartId;
        state.pending = false;
      });
  },
});

export default cartSlice.reducer;
