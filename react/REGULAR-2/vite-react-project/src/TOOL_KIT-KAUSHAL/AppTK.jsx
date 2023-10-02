import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import CountCom from "./CountCom";
import AmountCom from "./AmountCom";
import UserCOm from "./UserCOm";

export default function AppTK() {
  return (
    <>
      <Provider store={store}>
        {/* <CountCom /> */}
        {/* <AmountCom/> */}
        <UserCOm/>
      </Provider>
    </>
  );
}
