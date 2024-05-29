import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { users: [], formData: {}, index: null },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateData: (state, action) => {
      state.formData = action.payload.data;
      state.index = action.payload.index;
    },
    editData: (state, action) => {
      state.users.splice(state.index, 1, action.payload);
      state.index = null;
      state.formData = {  };
    },
    deleteData: (state, action) => {
      console.log("-----------  action----------->", action.payload)
      delete state?.users?.[action?.payload]
    },
  },
});

export default userSlice.reducer;
export const { addUser, updateData, editData,deleteData } = userSlice.actions;
