import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: { todoData: [] },
  reducers: {
    addTask: (state, action) => {
        console.log("-----------  action----------->", action);
        state.todoData.push(action.payload);        
        localStorage.setItem('todoData', JSON.stringify(state.todoData));
    },
    updateTask: (state, action) => {
      console.log("-----------  action----------->", action);
      state.todoData.splice(action.payload.index,1,action.payload.newData)
      localStorage.setItem('todoData', JSON.stringify(state.todoData));
    },
    deleteTask: (state,action)=>{
        state.todoData.splice(action.payload,1);
        localStorage.setItem('todoData', JSON.stringify(state.todoData));
    },
    setData:(state,action)=>{
        let todoTasks = JSON.parse(localStorage.getItem('todoData'));
        state.todoData = todoTasks
    }
  },
});

export default todoSlice.reducer;

export const { addTask, updateTask,deleteTask ,setData} = todoSlice.actions;
