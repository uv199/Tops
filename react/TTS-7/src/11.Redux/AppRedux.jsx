import React from "react";
import Count from "./Count";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Amount from "./Amount";
import TodoPage from "./TodoPage";

export default function AppRedux() {
  return (
    <>
      <Provider store={store}>
        {/* <Count /> */}
        {/* <Amount /> */}
        <TodoPage />
      </Provider>
    </>
  );
}
