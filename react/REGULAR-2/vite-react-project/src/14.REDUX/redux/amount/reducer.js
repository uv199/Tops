import { INC_AMT } from "./constant";

export const amountReducer = (state = { amount: 0 }, action) => {
  switch (action.type) {
    case INC_AMT:
      return { amount: state.amount + 10 };
    default:
      return state;
  }
};
