import React from "react";

export default function Profile2({ user }) {
  console.log("-----------  user----------->", user);
  return (
    <div>
      <h1>Name : {user?.name}</h1>
      <h3>Age : {user?.age}</h3>
      <hr />
    </div>
  );
}

/*

export default function Profile2(props) {
  return (
    <div>
      <h1>Name : {props?.user?.name}</h1>
      <h3>Age : {props?.user?.age}</h3>
      <hr />
    </div>
  );
}

*/
