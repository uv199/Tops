import { INC_AMT, INC_BY_AMT } from "./constant";

export const amountReducer = (state = { amount: 0 }, action) => {
  switch (action.type) {
    case INC_AMT:
      return { amount: state.amount + 10 };
    case INC_BY_AMT:
      return { amount: state.amount + action.payload };
    default:
      return state;
  }
};
