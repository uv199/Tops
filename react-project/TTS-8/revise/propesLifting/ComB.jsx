import React from "react";
import ComC from "./ComC";

export default function ComB({getName}) {
  return (
    <div>
      <ComC getName={getName} />
    </div>
  );
}
