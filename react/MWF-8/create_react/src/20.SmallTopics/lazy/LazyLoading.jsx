import React, { Suspense, lazy } from "react";
// import LazyCome from "./LazyCome";
const LazyCome = lazy(() => import("./LazyCome"));

export default function LazyLoading() {
  return (
    <>
      <Suspense fallback={<h1>Loading.......!</h1>}>
        <LazyCome />
      </Suspense>
    </>
  );
}
