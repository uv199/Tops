import React, { createContext, useContext } from "react";

import { UserContext } from "./Usecontaxt";
import { CarContext } from "./Usecontaxt";

export default function Com_A({ age }) {
  const carData = useContext(CarContext);
  const data_a = useContext(UserContext);
  return (
    <>
      <h1>My age is {data_a.userData.age}</h1>
    </>
  );
}
