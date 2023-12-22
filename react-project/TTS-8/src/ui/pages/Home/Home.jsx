import React from "react";
import Card from "../../components/Card/Card";
import { useSelector } from "react-redux";

export default function Home() {
  // -----------state-----------

  // useSelector etc

  // -----------useEffect-----------

  // -----------functions-----------

  const token = useSelector((state) => state.authReducer.token);
  return (
    <div>
      <h1>{token}</h1>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
