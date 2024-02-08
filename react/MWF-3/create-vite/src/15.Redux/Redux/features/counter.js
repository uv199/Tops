import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "counter",
  initialState: { count: [] },
  reducers: {
    incrementOne: (state, action) => {
      state.count++;
    },
    incByTen: (state, action) => {
      state.count += 10;
    },
    incByInput: (state, action) => {
      console.log("-----------  action----------->", action);
      state.count += action.payload;
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
export const { incrementOne, incByTen, incByInput } = countSlice.actions;
