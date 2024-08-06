import React from "react";
import Count from "./Count";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Amount from "./Amount";
import TodoPage from "./TodoPage";
import Product from "./Product";

export default function AppRedux() {
  return (
    <div>
      <Provider store={store}>
        <Count />
        {/* <Amount /> */}
        {/* <TodoPage /> */}
        <Product />
      </Provider>
    </div>
  );
}
