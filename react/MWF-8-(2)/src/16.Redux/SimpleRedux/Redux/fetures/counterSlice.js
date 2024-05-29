import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "count",
  initialState: { count: 10 }, // must be in object
  reducers: {
    incrementCount: (state, action) => {
      console.log("increment action called");
      state.count++;
    },
    decrementCount: (state, action) => {
      state.count--;
    },
  },
});

export default counterSlice.reducer;
export const { incrementCount, decrementCount } = counterSlice.actions;
