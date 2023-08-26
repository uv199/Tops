import React from "react";

export default function CondCom() {
  let length = [1, 2, 3].length;
  return (
    <>
    
      {/* {length > 0 ? (
        <h1> arrays length is {length}</h1>
      ) : (
        <h1>Array is empty</h1>
      )} */}
      {length > 0 && <h1> arrays length is {length}</h1>}
    </>
  );
}

// export default function CondCom() {
//   let length = [1, 2, 3].length;
//   if (length > 0) {
//     return <h1> arrays length is {length}</h1>;
//   } else {
//     return <h1>Array is empty</h1>;
//   }
// }
