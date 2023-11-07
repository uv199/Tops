import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 1 };

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {},
  extraReducers: {
    ["nameList/addName"]: (state, action) => {
      state.count++;
    },
    ["nameList/fetchData/fulfilled"]: (state, action) => {
      console.log("nameList/fetchData/fulfilled------------------>", action);
      // state.count += 1;
      ++state.count;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase("nameList/addName", (state, action) => {
  //     state.count++;
  //   });
  // },
});

export default countSlice.reducer;
