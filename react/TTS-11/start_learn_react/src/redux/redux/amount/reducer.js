import { INC } from "./constant";

export const amountReducer = (state = { amount: 0 }, action) => {
  if (action.type === INC) {
    return { amount: state.amount + 1 };
  }
  return state;
};
