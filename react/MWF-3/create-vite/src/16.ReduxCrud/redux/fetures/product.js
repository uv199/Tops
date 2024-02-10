import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: { product: [] },
  reducers: {},
});

export default productSlice.reducer;
