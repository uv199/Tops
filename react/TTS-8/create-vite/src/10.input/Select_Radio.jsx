import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Select from "react-select";

export default function Select_Radio() {
  let [gender, setGender] = useState("male");
  let [hobby, sethobby] = useState(["singing", "reading"]);

  const checkboxHandler = (value) => {
    console.log("value", value);
    let index = hobby.indexOf(value);
    console.log("index", index);
    if (index === -1) {
      sethobby([...hobby, value]);
    } else {
      hobby.splice(index, 1);
      sethobby([...hobby]);
    }
  };

  const colourOptions = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
    { value: "yellow", label: "Yellow" },
  ];
  const getSelect = (e) => {
    console.log("e", e);
  };
  return (
    <>
      <div>
        <h1>Select</h1>
        <div className="d-flex gap-3">
          <input
            checked={gender === "male"}
            type="radio"
            id="male"
            onClick={() => setGender("male")}
          />
          <label htmlFor="male">male</label>

          <input
            checked={gender === "female"}
            type="radio"
            id="female"
            onClick={() => setGender("female")}
          />
          <label htmlFor="female">female</label>

          <input
            checked={gender === "kids"}
            type="radio"
            id="kids"
            onClick={() => setGender("kids")}
          />
        </div>
        <div className="d-flex flex-column">
          <h1>Checkbox</h1>
          <div>
            <input
              checked={hobby.includes("singing")}
              type="checkbox"
              onClick={() => checkboxHandler("singing")}
              id="ch1"
            />
            <label htmlFor="ch1">Singing</label>
          </div>
          <div>
            <input
              checked={hobby.includes("dancing")}
              type="checkbox"
              onClick={() => checkboxHandler("dancing")}
              id="ch2"
            />
            <label htmlFor="ch2">Dancing</label>
          </div>
          <div>
            <input
              checked={hobby.includes("swimming")}
              type="checkbox"
              onClick={() => checkboxHandler("swimming")}
              id="ch3"
            />
            <label htmlFor="ch3">Swimming</label>
          </div>
          <div>
            <input
              checked={hobby.includes("reading")}
              type="checkbox"
              onClick={() => checkboxHandler("reading")}
              id="ch4"
            />
            <label htmlFor="ch4">Reading</label>
          </div>
          {hobby.map((e, i) => (
            <p key={i}>
              {i + 1}.{e}
            </p>
          ))}
        </div>
        <Select
          onChange={(e) => getSelect(e.map((ele) => ele.value))}
          isMulti
          options={colourOptions}
        />
      </div>
    </>
  );
}
