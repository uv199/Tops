import { useState } from "react";

export default function HOCFun(Componenet) {
  return () => {
    let [count, setCount] = useState(120);
    return <Componenet count={count} setCount={setCount} />;
  };
}
