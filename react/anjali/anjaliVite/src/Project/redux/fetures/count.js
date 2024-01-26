import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: { count: 1999 },
  reducers: {
    incCount: (state, action) => {
      console.log("state-=-=-=-=->", state);
      state.count++;
    },
    incCount_2: (state, action) => {
      console.log("state-=-=-=-=->", state);
      state.count += 2000;
    },
  },
});

export default countSlice.reducer;
export const { incCount, incCount_2 } = countSlice.actions;
