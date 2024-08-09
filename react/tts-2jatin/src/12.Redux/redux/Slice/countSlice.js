import { createSlice } from "@reduxjs/toolkit";

let countSlice = createSlice({
  name: "count",
  initialState: { count: 0 },
  reducers: {
    increment: (state, action) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});

export default countSlice.reducer;
export const { increment, decrement } = countSlice.actions;
