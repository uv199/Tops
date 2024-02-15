import React from "react";
import Count from "./ui/count/Count";
import { Provider } from "react-redux";
import store from "./redux/app/store";
import Amount from "./ui/amount/Amount";

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
