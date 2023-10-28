import { createSlice } from "@reduxjs/toolkit";

const initialState = { nameArr: ["test", "name"] };

const nameslice = createSlice({
  name: "nameList",
  initialState,
  reducers: {
    addName: (state, action) => {
      console.log("action", action);
      state.nameArr.push(action.payload);
    },
    updateName: (state, action) => {},
    removeName: (state, action) => {
      console.log("action", action);
      state.nameArr.splice(action.payload, 1);
    },
  },
});

export default nameslice.reducer;
export const { addName, updateName, removeName } = nameslice.actions;
