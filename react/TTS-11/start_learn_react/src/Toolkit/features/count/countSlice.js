import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};
const countslice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count++;
    },
  },
});

export default countslice.reducer;
export const { increment } = countslice.actions;
