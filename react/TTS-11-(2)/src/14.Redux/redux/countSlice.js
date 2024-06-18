import { createSlice } from "@reduxjs/toolkit";

let countSlice = createSlice({
  name: "count",
  initialState: { count: 0 },
  reducers: {
    incrementCount: (state, action) => {
      state.count++;
    },
    incByValue: (state, action) => {
      state.count = state.count + +action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase("user/addUser", (state, action) => {
      state.count++;
    });
  },
});

export default countSlice.reducer;
export const { incrementCount, incByValue } = countSlice.actions;
