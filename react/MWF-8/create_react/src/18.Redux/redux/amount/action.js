import { INC_AMT_1, INC_AMT_2 } from "./constant";

export const incAmtAction = () => {
  return { type: INC_AMT_1 };
};
export const incAmt2Action = (no) => {
  return { type: INC_AMT_2, payload: no };
};
