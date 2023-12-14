import React, { useContext } from "react";
import { NameContaxt } from "./UseContaxtCom";

export default function ComB3({ name }) {
  const data = useContext(NameContaxt);
  console.log("-----------  data----------->", data);
  return (
    <>
      <h1>1. My Name is {name}</h1>
      <h1>2. My Name is {data.name}</h1>
    </>
  );
}

/*

 export default function ComB3({ name }) {
   return (
     <>
       <h1>1. My Name is {name}</h1>
       <NameContaxt.Consumer>
         {(data) => {
           return <h1>2. My Name is {data}</h1>;
         }}
       </NameContaxt.Consumer>
     </>
   );
 }

*/
