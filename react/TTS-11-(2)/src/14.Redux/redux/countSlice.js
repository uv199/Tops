import { createSlice } from "@reduxjs/toolkit";

let countSlice = createSlice({
  name: "count",
  initialState: { count: 99 },
  reducers: {
    incrementCount: (state, action) => {
      console.log("-=-=-=->");
      state.count++;
    },
  },
});

export default countSlice.reducer;
export const { incrementCount } = countSlice.actions;
