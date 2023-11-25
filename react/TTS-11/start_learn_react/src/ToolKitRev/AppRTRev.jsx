import React from "react";
import Count from "./Count";
import { Provider } from "react-redux";
import { store } from "./Redux/App/store";
import User from "./User";

export default function AppRTRev() {
  return (
    <>
      <Provider store={store}>
        <Count />
        <User />
      </Provider>
    </>
  );
}
