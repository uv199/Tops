import React from "react";

export default function PropsProject1(props) {
  return props.inputType === "email" ? (
    <div>
      <label htmlFor="email">Enter Your Email</label>
      <input type="email" id="email" />
    </div>
  ) : (
    <div>
      <label htmlFor="pass">Enter Your Password</label>
      <input type="password" id="pass" />
    </div>
  );
}

// export default function PropsProject1(props) {
//   if (props.inputType === "email") {
//     return (
//       <div>
//         <label htmlFor="email">Enter Your Email</label>
//         <input type="email" id="email" />
//       </div>
//     );
//   } else
//     return (
//       <div>
//         <label htmlFor="pass">Enter Your Password</label>
//         <input type="password" id="pass" />
//       </div>
//     );
// }
