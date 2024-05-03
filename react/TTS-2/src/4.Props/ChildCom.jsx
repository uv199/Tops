import React from "react";

// export default function ChildCom(props) {
//   console.log("-----------  props----------->", props);
//   // props.age = 900;
//   return (
//     <div>
//       <h1>Hello {props?.person}</h1>
//       <h3>Age is {props?.age}</h3>
//     </div>
//   );
// }

// export default function ChildCom({ person, age, address }) {
//   return (
//     <div>
//       <h1>Hello {person}</h1>
//       <h3>Age is {age}</h3>
//       <h2>
//         city : {address?.city} pinCode : {address?.pin?.test}
//       </h2>
//     </div>
//   );
// }

export default function ChildCom({ person, age, address }) {
  return (
    <div>
      <h1>Hello {person}</h1>
      <h3>Age is {age}</h3>
      <h2>
        city : {address?.city} pinCode : {address?.pin?.test}
      </h2>
    </div>
  );
}
