import React, { useState } from "react";

export default function RadioInput() {
  let [gender, setGender] = useState("male");
  return (
    <div>
      <h1>gender : {gender}</h1>
      <div>
        <input
          checked={gender === "male"}
          type="radio"
          onClick={() => setGender("male")}
        />
        male
        <br />
        <input
          checked={gender === "female"}
          type="radio"
          onClick={() => setGender("female")}
        />
        female
        <br />
        <input
          checked={gender === "other"}
          type="radio"
          onClick={() => setGender("other")}
        />
        other
      </div>
    </div>
  );
}
