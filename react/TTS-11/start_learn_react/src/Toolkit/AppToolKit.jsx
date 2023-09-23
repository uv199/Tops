import React from "react";
import CountCom from "./CountCom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import AmountCom from "./AmountCom";

export default function AppToolKit() {
  return (
    <>
      <Provider store={store}>
        <CountCom />
        <AmountCom />
      </Provider>
    </>
  );
}
