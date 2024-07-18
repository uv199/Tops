import React from "react";
import Count from "./Count";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Amount from "./Amount";

export default function AppRedux() {
  return (
    <div>
      <Provider store={store}>
        <Count />
        <Amount />
      </Provider>
    </div>
  );
}
