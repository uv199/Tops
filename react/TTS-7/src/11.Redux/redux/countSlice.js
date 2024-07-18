import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "count",
  initialState: { count: 1020 },
  reducers: {
    increment: (state) => {
      state.count++;
    },
  },
});

export default counterSlice.reducer;

export const { increment } = counterSlice.actions;
