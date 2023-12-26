import React from "react";
import Card from "../../components/Card/Card";
import { useSelector } from "react-redux";
import Slider from "./Slider";

export default function Home() {
  // -----------state-----------

  // useSelector etc

  // -----------useEffect-----------

  // -----------functions-----------

  const token = useSelector((state) => state.authReducer.token);
  return (
    <div className="w-100">
      <Slider />
    </div>
  );
}
