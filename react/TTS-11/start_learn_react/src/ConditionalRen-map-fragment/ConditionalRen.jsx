import React from "react";

export default function ConditionalRen(props) {
  return props.isMale ? (
    <>
      <h1>Yes, He is a boy.</h1>
      {props.isYoung ? <h2>Yes he is Young</h2> : <h2> No he is not Young</h2>}
    </>
  ) : (
    <h1>Yes, She is a girl.</h1>
  );
}

// export default function ConditionalRen(props) {
//   if (props.isMale) {
//     return (
//       <>
//         <h1>Yes, He is a boy.</h1>;
//       </>
//     );
//   } else {
//     return (
//       <>
//         <h1>Yes, She is a girl.</h1>;
//       </>
//     );
//   }
// }
