import React, { useState } from "react";
import ProductTable from "./ProductTable";

export default function Product() {
  let [flag, setFlag] = useState(true);

  const refetch = () => setFlag(!flag);
  return (
    <>
      <ProductTable refetch={refetch} flag={flag} />
    </>
  );
}
