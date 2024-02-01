import React, { Suspense, lazy } from "react";
// import ExpensiveCom from "./ExpensiveCom";

const ExpensiveCom = lazy(() => import("./ExpensiveCom"));

export default function LazyLoad() {
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <ExpensiveCom />
      </Suspense>
    </div>
  );
}
