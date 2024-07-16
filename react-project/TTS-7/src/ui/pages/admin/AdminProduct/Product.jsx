import React, { useState } from "react";
import ProductTable from "./ProductTable";
import { Button } from "@material-tailwind/react";
import ProductForm from "./ProductForm";
import { useNavigate } from "react-router-dom";
export default function Product() {
  const [showModal, setShowModal] = useState(false);
  let [flag, setFlag] = useState(true);

  const refetch = () => setFlag(!flag);
  const navigate = useNavigate();
  return (
    <>
      <div className="px-5">
        <Button onClick={() => navigate("/admin-product/create")}>
          Add product
        </Button>
      </div>
      <ProductTable refetch={refetch} flag={flag} />
    </>
  );
}
