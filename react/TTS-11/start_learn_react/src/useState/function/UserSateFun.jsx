import React, { useState } from "react";

// export default function UserSateFun() {
//   const [count1, SetCount1] = useState(0);
//   // let [count1, SetCount1] = useState(0);  // give error - have to give diffrent name
//   const [No, setNo] = useState(0);

//   // let x = 0;
//   // function count(params) {
//   //   x++;
//   //   console.log("🚀 ~ file: UserSateFun.jsx:7 ~ count ~ x:", x);
//   // }

//   function countState(params) {
//     SetCount1(count1 + 2); // count= count+1
//     // SetCount1()
//     console.log("🚀 ~ file: UserSateFun.jsx:7 ~ count ~ x:");
//   }
//   return (
//     <div>
//     //   <div onClick={() => count()}> please click me</div>
//     //   <h1>{x}</h1>
//     //   <p>-------------------------------------------------------------</p>
//       <div onClick={() => countState()}> please click count</div>
//       <h1>
//         {count1}
//         {No}
//       </h1>
//     </div>

//   );
// }

// -----------------------------------------------------------------------------
export default function UserSateFun() {
  const [name1, SetName1] = useState("---");
  let name = "---";
  function fun(e) {
    SetName1(e.target.value);
    console.log("🚀 ~ file: UserSateFun.jsx:37 ~ UserSateFun ~ name1:", name1);
    // name = e.target.value;
    // console.log("🚀 ~ file: UserSateFun.jsx:40 ~ fun ~ name:", name);
  }
  return (
    <div>
      <input type="text" onChange={(e) => fun(e)} />
      {/* <h1>{name}</h1> */}
      <h1>{name1}</h1>
    </div>
  );
}
