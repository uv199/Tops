import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "counter",
  initialState: { count: 900 },
  reducers: {
    incrementOne: (state, action) => {
      state.count++;
    },
    incByTen: (state, action) => {
      state.count += 10;
    },
  },
});

export default countSlice.reducer;
export const { incrementOne, incByTen } = countSlice.actions;
