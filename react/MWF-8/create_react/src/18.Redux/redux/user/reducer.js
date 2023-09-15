import { ADD_USER } from "./constatnt";

export const userReducer = (
  state = [{ name: "defult user", age: 22 }],
  action
) => {
  console.log("action", action);
  switch (action.type) {
    case ADD_USER:
      return [...state, action?.payload];

    default:
      break;
  }
  return state;
};
