import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import CountCom from "./CountCom";
import AmountCom from "./AmountCom";
1;
export default function AppComToolKit() {
  return (
    <>
      <Provider store={store}>
        <CountCom />
        <AmountCom />
      </Provider>
    </>
  );
}
