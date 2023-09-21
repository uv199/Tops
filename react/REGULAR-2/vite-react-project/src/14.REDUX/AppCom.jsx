import React from "react";
import CountCom from "./CountCom";
import { Provider } from "react-redux";
import { store } from "./redux/reduxStore";
import AmountCom from "./AmountCom";
import UserTable from "./ui/UserTable";
import UserForm from "./ui/UserForm";

export default function AppCom() {
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
