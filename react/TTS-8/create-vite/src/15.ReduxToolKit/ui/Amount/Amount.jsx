import React from "react";
import AmountAction from "./AmountAction";
import AmountDisplay from "./AmountDisplay";

export default function Amount() {
  return (
    <>
      <div>
        <AmountDisplay />
        <AmountAction />
      </div>
    </>
  );
}
