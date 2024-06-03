import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "count",
  initialState: { count: 10 }, // must be in object
  reducers: {
    incrementCount: (state, action) => {
      console.log("Increment action called");
      state.count++;
    },
    decrementCount: (state, action) => {
      state.count--;
    },
    incrementByUser: (state, action) => {
      state.count += +action.payload;
      console.log("-----------  action----------->", action);
    },
  },
});

export default counterSlice.reducer;
export const { incrementCount, decrementCount, incrementByUser } =
  counterSlice.actions;
