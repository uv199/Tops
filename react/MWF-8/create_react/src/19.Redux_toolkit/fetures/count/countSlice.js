import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 10000,
};
const countSlice = createSlice({
  name: "count",
  initialState,
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
