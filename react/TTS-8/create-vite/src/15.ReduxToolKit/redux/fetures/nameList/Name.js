import { createSlice } from "@reduxjs/toolkit";

const initialState = { nameArr: [] };

const nameslice = createSlice({
  name: "nameList",
  initialState,
  reducers: {
    addName: (state, action) => {
      console.log("action", action);
      state.nameArr.push(action.payload);
    },
    updateName: (state, { payload }) => {
      state.nameArr.splice(payload?.index, 1, payload?.newData);
    },
    removeName: (state, action) => {
      console.log("action", action);
      state.nameArr.splice(action.payload, 1);
    },
  },
});

export default nameslice.reducer;
export const { addName, updateName, removeName } = nameslice.actions;
