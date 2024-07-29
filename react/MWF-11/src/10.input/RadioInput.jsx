import React, { useState } from "react";

export default function RadioInput() {
  let [gender, setGender] = useState("male");
  return (
    <div>
      <h1>gender : {gender}</h1>
      <input
        checked={gender === "male"}
        type="radio"
        onChange={(e) => setGender("male")}
      />
      Male
      <br />
      <input
        checked={gender === "female"}
        type="radio"
        onChange={() => setGender("female")}
      />
      Female
      <br />
      <input
        checked={gender === "other"}
        type="radio"
        onClick={() => setGender("other")}
      />
      Other
    </div>
  );
}
