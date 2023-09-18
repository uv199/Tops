import { ADD_USER } from "./constatnt";

const data = JSON.parse(localStorage.getItem("userData"));

export const userReducer = (state = data, action) => {
  console.log("action", action);
  switch (action.type) {
    case ADD_USER:
      let data = [...state, action?.payload];
      localStorage.setItem("userData", JSON.stringify(data));
      return data;
    default:
      break;
  }
  return state;
};
