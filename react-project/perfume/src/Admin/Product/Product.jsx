import React, { useState } from "react";
import ProductTable from "./ProductTable";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-end  mt-5 pr-4 items-center">
        <button
          className="bg-[#bc8b57] text-white font-bold border !border-[#bc8b57] hover:bg-[#855929] hover:text-[#bc8b57] focus:border-none"
          onClick={() => navigate("/admin-product-form")}
        >
          Add New Product
        </button>
      </div>
      <ProductTable />
    </div>
  );
}
