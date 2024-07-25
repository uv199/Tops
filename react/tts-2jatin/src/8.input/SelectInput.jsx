import React, { useState } from "react";

export default function SelectInput() {
  let [gender, setGender] = useState("female");

  return (
    <div>
      <select
        className="border border-black py-1 px-3 rounded-md"
        onChange={(e) => setGender(e.target.value)}
        value={gender}
      >
        <option value="male">MALE</option>
        <option value="female">FEMALE</option>
        <option value="other">OTHER</option>
      </select>
    </div>
  );
}


// local storage
// cookies
// search
// filter
