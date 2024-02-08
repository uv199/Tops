import { createSlice } from "@reduxjs/toolkit";

let pointSlice = createSlice({
  name: "point",
  initialState: { point: 0 },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase("count/incCount_2", (state, action) => {
      state.point++;
    });
  },
  // extraReducers: {
  //   ["count/incCount_2"]: (state, action) => {
  //     state.point++;
  //   },
  // },
});

export default pointSlice.reducer;
