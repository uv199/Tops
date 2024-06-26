import React from "react";
import { Provider } from "react-redux";
import Cart from "./UI/Cart";
import { store } from "./ReduxHome/app";

export default function AppRedux() {
  return (
    <div>
      <Provider store={store}>
        <Cart />
      </Provider>
    </div>
  );
}
