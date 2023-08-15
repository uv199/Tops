import React, { useContext } from "react";
import { UserContext } from "./ContexCom";

export default function ComB3(props) {
  const stateUser = useContext(UserContext);
  return (
    <>
      <h1>ComB3</h1>
      <h1>childb3 --- {stateUser.user}</h1>
      <input type="text" onChange={(e) => stateUser.setUser(e.target.value)} />
    </>
  );
}
// import { NameContext } from "./ContexCom";

// export default function ComB3(props) {
//     console.log("----comb3----", props.name);
//     const data = useContext(NameContext);
//     return (
//       <>
//         <h1>ComB3</h1>
//         <h1>value---{props.name}</h1>
//         <h1>name :::: {data}</h1>;
//         {/* <NameContext.Consumer>
//           {(user) => {
//             return <h1>name : {user}</h1>;
//           }}
//         </NameContext.Consumer> */}
//       </>
//     );
//   }
