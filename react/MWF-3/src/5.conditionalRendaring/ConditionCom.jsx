import React from "react";

export default function ConditionCom() {
  const newUser = false;
  return (
    <>
      <h1>ConditionCom</h1>
      {newUser && <h1>Well-Come Admid</h1>}
    </>
  );
}

// export default function ConditionCom() {
//   const newUser = false;
//   return (
//     <>
//       <h1>ConditionCom</h1>
//       {!newUser ? <h1>Well-Come back Admin </h1> : <h1>Well-Come Admid</h1>}
//     </>
//   );
// }

// export default function ConditionCom() {
//     const newUser = true;
//     if (!newUser) {
//       return (
//         <>
//           <h1>ConditionCom</h1>
//           <h1>Well-Come Admid</h1>
//         </>
//       );
//     } else {
//       return (
//         <>
//           <h1>ConditionCom</h1>
//           <h1>Well-Come back Admin </h1>
//         </>
//       );
//     }
//   }
