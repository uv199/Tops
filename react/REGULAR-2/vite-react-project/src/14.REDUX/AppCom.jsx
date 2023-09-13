import React from "react";
import Com from "./Com";
import { Provider } from "react-redux";
import { store } from "./redux/reduxStore";

export default function AppCom() {
  return (
    <>
      <Provider store={store}>
        <Com />
      </Provider>
    </>
  );
}
