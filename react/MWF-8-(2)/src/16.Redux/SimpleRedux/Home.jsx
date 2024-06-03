import React from "react";
import Header from "./Header";
import User from "./redux/User";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center">
      <Header />
      <User />
    </div>
  );
}
