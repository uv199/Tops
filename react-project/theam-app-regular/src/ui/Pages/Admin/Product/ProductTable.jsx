import axios from "axios";
import React from "react";
import { BE_URL } from "../../../../config";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Description",
    selector: (row) => row.description,
    sortable: true,
  },
];

export default function ProductTable() {
  const productData = useSelector((state) => state.productReducer.product);
  console.log("productData", productData);
  return (
    <>
      <DataTable columns={columns} data={productData} />
    </>
  );
}
