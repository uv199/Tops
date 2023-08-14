import React, { useContext } from "react";
import { NameContext } from "./ContexCom";

// export default function ComB3(props) {
//   const contextData = useContext(NameContext);
//   console.log("contextData:", contextData);
//   console.log("===b3====>", props.name);
//   return (
//     <>
//       <h1>ComB3</h1>

//       {/* <NameContext.Consumer>
//         {(user) => {
//           return <h1>{user}</h1>;
//         }}
//     </NameContext.Consumer> */}
//       <h1>{props.name}</h1>
//     <h1>{contextData}</h1>;
//     </>
//   );
// }

export default function ComB3() {
  const contextData = useContext(NameContext);
  console.log("======", contextData);
  return (
    <>
      <h1>ComB3</h1>
      <input
        type="text"
        onChange={(e) => contextData.setName(e?.target.value)}
      />
    </>
  );
}
