import React, { Suspense, lazy } from "react";
// import ComeFun from "./ComeFun";
const ComeFun = lazy(() => import("./ComeFun"));

export default function LazyLoad() {
  return (
    <div>
      <h1>LazyLoad</h1>
      <Suspense fallback={<h1>Loading.....!</h1>}>
        <ComeFun />
      </Suspense>
    </div>
  );
}
