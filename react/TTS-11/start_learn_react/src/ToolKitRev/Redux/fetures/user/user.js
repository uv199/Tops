import { createSlice } from "@reduxjs/toolkit";
const initialState = { users: [] };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      state.users.splice(action.payload, 1);
    },
    updateUser: (state, { payload }) => {
      state.users.splice(payload.index, 1, payload.newData);
    },
  },
});

export default userSlice.reducer;
export const { addUser, removeUser, updateUser } = userSlice.actions;
