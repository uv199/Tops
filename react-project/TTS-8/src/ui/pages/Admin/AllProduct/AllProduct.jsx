import { Search } from "lucide-react";
import React, { useState } from "react";
import { Button, Input, Table } from "reactstrap";
import ProductModal from "@component/Modal/ProductModal";
import ProductTable from "./ProductTable";
import PaginationCom from "../../../components/Pagination/PaginationCom";

export default function AllProduct() {
  let [modal, setModal] = useState(false);
  let [totalCount, setTotalCount] = useState(0);

  let [pagination, setPagination] = useState({
    limit: 10,
    page: 1,
  });
  const toggle = () => setModal(!modal);
  return (
    <>
      <ProductModal modal={modal} toggle={toggle} />
      <div style={{ backgroundColor: "lightgrey" }} className="m-3 p-3">
        <div className="d-flex justify-content-end align-items-center">
          <Input
            className="w-25 me-2"
            placeholder={"Search your text here.."}
          />
          <Button onClick={toggle}>Add Product</Button>
        </div>
        <hr />
        <ProductTable
          pagination={pagination}
          setTotalCount={setTotalCount}
          toggle={toggle}
        />
        {/* // put pagination here 
          transfer all state from table to here and pass them into table and pagination according need
          */}
        <PaginationCom
          setPagination={setPagination}
          page={pagination?.page}
          limit={pagination?.limit}
          pageLimit={Math.ceil(totalCount / 10)}
        />
      </div>
    </>
  );
}
