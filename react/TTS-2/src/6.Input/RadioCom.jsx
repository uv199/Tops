import React, { useState } from "react";
import { Input } from "reactstrap";

export default function RadioCom() {
  let [gender, setGender] = useState("male");
  return (
    <div className="">
      <h1>Gender : {gender}</h1>
      <div>
        <Input
          type="radio"
          checked={gender === "male"}
          onChange={() => setGender("male")}
        />{" "}
        Male
      </div>
      <div>
        <Input
          type="radio"
          checked={gender === "female"}
          onChange={() => setGender("female")}
        />{" "}
        Female
      </div>
    </div>
  );
}
