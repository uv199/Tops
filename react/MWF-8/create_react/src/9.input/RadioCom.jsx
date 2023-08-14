import React, { useState } from "react";

export default function RadioCom() {
  let [gender, setGender] = useState(["men"]);
  return (
    <>
      <h1>radio input</h1>
      <input
        type="radio"
        checked={gender === "men"}
        onChange={(e) => setGender("men")}
      />
      Men
      <input
        type="radio"
        checked={gender === "women"}
        onChange={(e) => setGender("women")}
      />
      Women
      <input
        type="radio"
        checked={gender === "kids"}
        onChange={(e) => setGender("kids")}
      />
      Kids
    </>
  );
}
