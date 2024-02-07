import React, { useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

export default function CheckBox() {
  let [color, setColor] = useState([]);

  const checkHandler = (clr, e) => {
    if (e?.target?.checked) {
      setColor([...color, clr]);
    } else {
      let filterData = color.filter((e) => e !== clr);
      setColor(filterData);
    }
  };
  return (
    <div>
      <div className="d-flex justify-content-center">
        <Form className="d-flex flex-column alii border border-dark p-3 rounded-2">
          <legend> Buttons</legend>
          <FormGroup>
            <Input
              type="checkbox"
              checked={color.includes("red")}
              onChange={(e) => checkHandler("red", e)}
            />
            <Label>red</Label>
          </FormGroup>
          <FormGroup>
            <Input
              type="checkbox"
              checked={color.includes("green")}
              onChange={(e) => checkHandler("green", e)}
            />
            <Label>green</Label>
          </FormGroup>
          <FormGroup>
            <Input
              type="checkbox"
              checked={color.includes("yellow")}
              onChange={(e) => checkHandler("yellow", e)}
            />
            <Label>yellow</Label>
          </FormGroup>
          <FormGroup>
            <Input
              type="checkbox"
              checked={color.includes("black")}
              onChange={(e) => checkHandler("black", e)}
            />
            <Label>black</Label>
          </FormGroup>
        </Form>

        <div>
          {color.map((e, i) => {
            return <h3 key={i}>{e}</h3>;
          })}
        </div>
      </div>
    </div>
  );
}

/*


ek manas = > name, age ,DOB


const men = {
    name:"uv",
    age:23,
    DOb:19/09/2000
}

pweson1 = "name"
pweson2 = "name"
pweson3 = "name"

const personName = ["uv","dhaval","soni"]


pweson1 = name, age ,DOB
pweson2 = name, age ,DOB
pweson3 = name, age ,DOB

const person = [
    {
        name:"uv",
        age:23,
        DOb:19/09/2000
    },
    {
        name:"dhaval",
        age:27,
        DOb:19/09/2000
    },
    {
        name:"soni",
        age:23,
        DOb:19/09/2000
    }
]
*/

let user = {
  name: "urvish",
  email: "uv@gmail.com",
  password: "1234",
  gender: "male",
  hobby: ["reading", "watch movie", "traveling"],
};
