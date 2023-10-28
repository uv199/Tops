import React from "react";
import Amount from "./ui/Amount/Amount";
import { Provider } from "react-redux";
import { store } from "./redux/app/store";
import Name from "./ui/Name/Name";

export default function AppRedux() {
  return (
    <>
      <Provider store={store}>
        {/* <Amount /> */}
        <Name />
      </Provider>
    </>
  );
}
