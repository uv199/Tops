import React from "react";
import { useSelector } from "react-redux";

export default function User() {
  let data = useSelector((store) => {
    return store?.userReducer;
  });

  console.log("-----------  data----------->", data);
  return (
    <div>
      {data.user.map((e) => {
        return <li>{e}</li>;
      })}
    </div>
  );
}
