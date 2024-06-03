import { createSlice } from "@reduxjs/toolkit";

let taskSlice = createSlice({
  name: "task",
  initialState: { task: [] },
  reducers: {
    addTask: (state, action) => {
      state.task.push(action.payload);
    },
  },
});

export default taskSlice.reducer;
export const { addTask } = taskSlice.actions;
