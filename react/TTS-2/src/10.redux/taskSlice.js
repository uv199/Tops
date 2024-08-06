import { createSlice } from "@reduxjs/toolkit";

let taskSlice = createSlice({
  name: "task",
  initialState: { task: [] },
  reducers: {
    addTask: (state, action) => {
      state.task.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.task.splice(action.payload, 1);
    },
  },
});

export default taskSlice.reducer;
export const { addTask, deleteTask } = taskSlice.actions;
