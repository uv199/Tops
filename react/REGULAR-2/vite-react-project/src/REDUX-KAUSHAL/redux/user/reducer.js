import { ADD_USER } from "./constant";

export const userReducer = (
  state = [{ email: "test", password: "123" }],
  action
) => {
  switch (action.type) {
    case ADD_USER || ADD_USER_FROM_API:
      return [...state, action.payload];
    default:
      return state;
  }
};
