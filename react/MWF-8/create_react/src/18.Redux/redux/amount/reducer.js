import { INC_AMT_1, INC_AMT_2 } from "./constant";
export const amountReducer = (state = { amount1: 0, amount2: 100 }, action) => {
  console.log("action", typeof action.payload);
  switch (action.type) {
    case INC_AMT_1:
      return { ...state, amount1: state.amount1 + 1 };
    case INC_AMT_2:
      return { ...state, amount2: state.amount2 + action?.payload };
    default:
      return state;
  }
};
