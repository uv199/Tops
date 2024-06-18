import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { user: [] },
  reducers: {
    addUser: (state, action) => {
      state.user.push(action.payload);
    },
  },
});

export default userSlice.reducer;
export const { addUser } = userSlice.actions;
