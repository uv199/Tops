import React, { useState } from "react";
// state key name, input name must be same
export default function MultipleInputCom() {
  let [userData, setUserData] = useState({
    name: "",
    email: "",
    address: "",
  });

  function getData(e) {
    // console.log("------>", e.target.name);
    setUserData({ ...userData, [e?.target?.name]: e?.target?.value });
    console.log("------>", userData);
  }
  return (
    <>
      <label htmlFor="name">Last Name : </label>
      <input
        type="text"
        placeholder="please enter your last name"
        id="name"
        name="name"
        onChange={(e) => getData(e)}
      />
      <label htmlFor="email">Email : </label>
      <input type="email" placeholder="please enter your email" id="email" />
      <label htmlFor="add">Address : </label>
      <input type="text" placeholder="please enter your address" id="add" />

      <h1>
        {userData?.name}
        {userData?.email}
        {userData?.address}
      </h1>
    </>
  );
}
