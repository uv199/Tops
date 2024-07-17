import React from "react";
import CountCom from "./CountCom";
import { Provider } from "react-redux";
import { store } from "./store";

export default function AppRedux() {
  return (
    <div>
      <Provider store={store}>
        <CountCom />
      </Provider>
    </div>
  );
}
