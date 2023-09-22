import React from "react";

import { Provider } from "react-redux";
import CountCom from "./CountCom";
import { store } from "./redux/redux";
import AmountCom from "./AmountCom";
import UserForm from "./userUI/UserForm";
import UserTable from "./userUI/UserTable";

export default function App2() {
  return (
    <>
      <Provider store={store}>
        <UserForm />
        <UserTable />
        {/* <CountCom />
        <AmountCom /> */}
      </Provider>
    </>
  );
}
