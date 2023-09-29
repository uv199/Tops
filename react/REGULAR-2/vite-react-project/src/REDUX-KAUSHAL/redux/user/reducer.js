import { ADD_USER } from "./constant";

export const userReducer = (
  state = [{ email: "test", password: "123" }],
  action
) => {
  console.log("action", action);
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
    default:
      return state;
  }
};
