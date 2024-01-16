import React, { lazy } from "react";

const ComA2 = lazy(() => import("./ComA2"));
// import ComA2 from "./ComA3";

export default function ComA() {
  return (
    <div>
      <ComA2 />
    </div>
  );
}
