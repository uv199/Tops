import React, { useState } from "react";

export default function RadioInput() {
  let [gender, setGender] = useState("");

  return (
    <div className="flex gap-3">
      <h1>gender : {gender}</h1>
      <div>
        <input
          type="radio"
          checked={gender === "male"}
          onChange={() => setGender("male")}
        />
        Male
      </div>
      <div>
        <input
          type="radio"
          checked={gender === "female"}
          onChange={() => setGender("female")}
        />
        Female
      </div>
    </div>
  );
}
