import React from "react";
import CountCom from "./CountCom";
import { Provider } from "react-redux";
import { store } from "./redux/reduxStore";
import AmountCom from "./AmountCom";

export default function AppCom() {
  return (
    <>
      <Provider store={store}>
        <CountCom />
        <AmountCom/>
      </Provider>
    </>
  );
}
