import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: { todo: [] },
  reducers: {
    addTodo: (state, { payload }) => {
      state.todo.push(payload);
    },
    deleteTodo: (state, { payload }) => {
      state.todo = state.todo.filter((e, i) => i !== payload);
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo } = todoSlice.actions;
