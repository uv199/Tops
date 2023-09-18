import React from "react";
import AmountCom from "./AmountCom";
import { store } from "./redux/reduxStore";
import { Provider } from "react-redux";
import CountCom from "./CountCom";
import UserCom from "./ui/UserCom";
import GetDataCom from "./ui/GetDataCom";

export default function AppCom() {
  return (
    <>
      <Provider store={store}>
        {/* <h1>AppCom</h1> */}
        <GetDataCom />
        <UserCom />
        {/* <AmountCom /> */}
        {/* <CountCom /> */}
      </Provider>
    </>
  );
}
