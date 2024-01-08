import { createSlice } from "@reduxjs/toolkit";

let formSlice = createSlice({
  name: "user",
  initialState: { users: [] },
  reducers: {
    intialData: (state, action) => {
      let jsonData = localStorage?.getItem("userArr") || "[]";
      let normalData = JSON?.parse(jsonData);
      state.users = normalData;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
      localStorage?.setItem("userArr", JSON?.stringify?.(state.users));
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((e, i) =>{
         return  i !== action.payload
      })
      localStorage?.setItem("userArr", JSON?.stringify?.(state.users));      
    },

    updateUser:(state, action) =>{
      let newdata = state.users.splice( inx, 1 ,action.payload);
      console.log(newdata);
      state.users(...newdata)
      
    }
  },
});

export default formSlice.reducer;
export const { addUser, intialData, deleteUser, updateUser } = formSlice.actions;
