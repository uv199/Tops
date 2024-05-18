import React from "react";
import ProfilePage from "./ProfilePage";
import Profile2 from "./Profile2";

export default function PropsFunCom() {
  let user1 = { name: "urvish", age: 23 };
  let user2 = { name: "paras", age: 34 };
  return (
    <div>
      {/* ----------------------------------- */}
      <ProfilePage name={"Urvish"} age={23} />
      {/* <ProfilePage name={"Parash"} age={34} /> */}

      {/* ----------------------------------- */}
      {/* <Profile2 user={user1} />
      <Profile2 user={user2} />
      <Profile2 /> */}
    </div>
  );
}
