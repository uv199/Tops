import React, { useEffect } from "react";

export default function UseEffectRemove() {
  // it will work like componenet will unmount
  useEffect(() => {
    return () => {
      alert("------>");
    };
  }, []);
  return <h1>useEffectRemove</h1>;
}
