import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: { todoData: [] },
  reducers: {
    addTask: (state, action) => {
      console.log("-----------  action----------->", action);
      state.todoData.push(action.payload);
    },
    updateTask: (state, action) => {
      console.log("-----------  action----------->", action);
      //   state.todoData.push(action.payload);
      state.todoData.splice(action.payload.index,1,action.payload.newData)
    },
    deleteTask: (state,action)=>{
        state.todoData.splice(action.payload,1);
    }
  },
});

export default todoSlice.reducer;

export const { addTask, updateTask,deleteTask } = todoSlice.actions;
