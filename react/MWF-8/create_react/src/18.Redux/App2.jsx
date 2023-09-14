import React from "react";

import { Provider } from "react-redux";
import CountCom from "./CountCom";
import { store } from "./redux/redux";
import AmountCom from "./AmountCom";

export default function App2() {
  return (
    <>
      <Provider store={store}>
        <CountCom />
        <AmountCom />
      </Provider>
    </>
  );
}