import React from "react";
import Card from "../../components/Card/Card";
import { useSelector } from "react-redux";
import Register from "../Register/Register";

export default function Home() {
  // -----------state-----------

  // useSelector etc

  // -----------useEffect-----------

  // -----------functions-----------

  const token = useSelector((state) => state.authReducer.token);
  return (
    <div>
      <h1>{token}</h1>
      <Register />
      <Card />
    </div>
  );
}
