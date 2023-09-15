import { INC_AMT, INC_BY_AMT } from "./constant";

export const incAmount = () => {
  return { type: INC_AMT };
};

export const incByAmt = (value) => {
  return { type: INC_BY_AMT, payload: value };
};
