import { ADD_USER } from "./constanat";

export const userReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
    default:
      return state;
  }
};
