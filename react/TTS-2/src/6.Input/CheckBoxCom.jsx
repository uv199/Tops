import React, { useState } from "react";
import { Input } from "reactstrap";

export default function CheckBoxCom() {
  let [gender, setGender] = useState([]);
  const checkBoxHandler = (value, e) => {
    if (e.target.checked) {
      setGender([...gender, value]);
    } else {
      let filterData = gender.filter((e) => e !== value);
      setGender(filterData);
    }
  };

  return (
    <div className="">
      <h1>Gender : {gender}</h1>
      <div>
        <Input
          type="checkbox"
          checked={gender.includes("male")}
          onChange={(e) => checkBoxHandler("male", e)}
        />
        Male
      </div>
      <div>
        <Input
          type="checkbox"
          checked={gender.includes("female")}
          onChange={(e) => checkBoxHandler("female", e)}
        />
        Female
      </div>
      <div>
        <Input
          type="checkbox"
          checked={gender.includes("kids")}
          onChange={(e) => checkBoxHandler("kids", e)}
        />
        Kids
      </div>
    </div>
  );
}
