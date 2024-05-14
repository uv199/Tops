import React from "react";
import ChildCom from "./ChildCom";

export default function FunProps() {
  const user1 = "Urvish";
  const user2 = "Sanju";
  return (
    <div>
      <ChildCom
        person={user1}
        age={23}
        address={{ city: "surat", pin: 395007 }}
      />
      <ChildCom
        person={user2}
        age={20}
        // address={{ city: "navsari", pin: 728596 }}
      />
    </div>
  );
}

let user = {
  name: "urvsih",
  age: 23,
  address: {
    city: "surat",
    state: "gujarat",
  },
  hobby: ["reading", "play game"],
};
{/* <ChildCom user={user} />; */}
