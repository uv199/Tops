// import React, { useContext } from "react";
// import { CountContaxt } from "./UseContaxtCom";

// export default function ComA2() {
//   let data = useContext(CountContaxt);
//   console.log("-----------  data----------->", data);
//   return (
//     <div>
//       {/* <h1>Count is {data}</h1> */}
//     </div>
//   );
// }

import React, { Component } from "react";
import { CountContaxt } from "./UseContaxtCom";

export default class ComA2 extends Component {
  render() {
    return (
      <div>
        <CountContaxt.Consumer>
          {(data) => {
            console.log("-----------  data----------->", data);
            return <h1>Count is {data}</h1>;
          }}
        </CountContaxt.Consumer>
      </div>
    );
  }
}
