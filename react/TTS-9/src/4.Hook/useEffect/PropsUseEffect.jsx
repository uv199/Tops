import React, { useEffect } from "react";

export default function PropsUseEffect({ count }) {
  useEffect(() => {
    alert("just test");
  }, [count]);

  return (
    <>
      <hr />
      <h1>PropsUseEffect</h1>
      <h1>count is {count}</h1>
    </>
  );
}
/*

useEffect(()=>{
everytime
})

useEffect(()=>{
only first time
},[])

useEffect(()=>{
when count update
},[count])

*/
