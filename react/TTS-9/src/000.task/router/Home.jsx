import React, { Suspense, lazy } from "react";
import Loading from "./Loading";
let User = lazy(() => import("./User"));
export default function Home() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <User />
      </Suspense>
    </div>
  );
}
