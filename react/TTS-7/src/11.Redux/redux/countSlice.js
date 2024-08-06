import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "count",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count++;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("fetchProduct/fulfilled", (state) => {
      state.count++;
    });
  },
});

export default counterSlice.reducer;

export const { increment } = counterSlice.actions;
