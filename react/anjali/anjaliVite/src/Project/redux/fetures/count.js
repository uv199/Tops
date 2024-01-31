import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: { count: 10 },
  reducers: {
    incCount: (state, action) => {
      console.log("state-=-=-=-=->", state);
      state.count++;
    },
    incCount_2: (state, action) => {
      console.log("state-=-=-=-=->", state);
      state.count += 2;
    },
    inc_by_user_input: (state, action) => {
      console.log("-----------  action----------->", action);
      console.log("---action called----");
      state.count += action.payload;
    },
  },
});

export default countSlice.reducer;
export const { incCount, incCount_2, inc_by_user_input } = countSlice.actions;
