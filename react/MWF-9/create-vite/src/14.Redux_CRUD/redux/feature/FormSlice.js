import { createSlice } from "@reduxjs/toolkit";
import { CloudSnow } from "lucide-react";

let formSlice = createSlice({
  name: "user",
  initialState: { users: [] },
  reducers: {
    addUser: (state, action) => {
      console.log("--->", action.payload);
      state.users.push(action.payload);
    },
  },
});

export default formSlice.reducer;
export const { addUser } = formSlice.actions;
