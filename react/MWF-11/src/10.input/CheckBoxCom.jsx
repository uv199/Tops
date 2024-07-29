import React, { useState } from "react";

export default function CheckBoxCom() {
  let [hobby, setHobby] = useState([]);
  const checkHandler = (value, e) => {
    if (e.target.checked) {
      setHobby([...hobby, value]);
    } else {
      let filterData = hobby.filter((e) => e !== value);
      setHobby(filterData);
    }
  };
  return (
    <div>
      <h1>
        {hobby.map((e) => {
          return <li>{e}</li>;
        })}
      </h1>
      <input
        checked={hobby.includes("reading")}
        type="checkbox"
        onChange={(e) => checkHandler("reading", e)}
      />
      Reading
      <br />
      <input
        checked={hobby.includes("dancing")}
        type="checkbox"
        onChange={(e) => checkHandler("dancing", e)}
      />
      Dancing
      <br />
      <input
        checked={hobby.includes("playing")}
        type="checkbox"
        onChange={(e) => checkHandler("playing", e)}
      />
      Playing
      <br />
      <input
        checked={hobby.includes("traveling")}
        type="checkbox"
        onChange={(e) => checkHandler("traveling", e)}
      />
      Traveling
    </div>
  );
}
