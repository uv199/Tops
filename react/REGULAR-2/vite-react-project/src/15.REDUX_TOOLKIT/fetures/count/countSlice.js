import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 15550,
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    deceremnt: (state) => {
      state.count--;
    },
  },
});

export default countSlice.reducer;
export const { increment, deceremnt } = countSlice.actions;
