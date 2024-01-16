import React, { lazy, useContext } from "react";
import { UserContaxt } from "./MainContext";

export default function ComA4() {
  const data = useContext(UserContaxt);
  console.log("-----------  data----------->", data);
  return (
    <div>
      {/* <UserContaxt.Consumer>
        {(data) => {
          console.log("-----data--->", data);
          return <h1>hello, mr.{data.name}</h1>;
        }}
      </UserContaxt.Consumer> */}
      <h1>Hello {data?.name}</h1>
    </div>
  );
}
