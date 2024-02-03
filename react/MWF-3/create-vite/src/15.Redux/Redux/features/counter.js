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
  extraReducers: (builder) => {
    builder
      .addCase("amount/incAmt5", (state, action) => {
        state.count++;
      })
      .addCase("amount/incAmount", (state, action) => {
        // get
        console.log("--->", state.amount);
        state.count++;
      });
  },
});

export default countSlice.reducer;
export const { incrementOne, incByTen } = countSlice.actions;
