import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    incCount: (state, action) => {
      state.count++;
    },
    incCountByValue: (state, action) => {
      console.log("action", action);
      state.count += action.payload;
    },
  },
});

export default countSlice.reducer;
export const { incCount, incCountByValue } = countSlice.actions;
