import { Pencil, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";

export default function ProductTable() {
  let [productData, setProductData] = useState([]);

  const allData = useSelector((state) => {
    return state?.productReducer?.products;
  });
  console.log("allData", allData);
  useEffect(() => {
    setProductData(allData);
  }, []);

  return (
    <>
      <div className="d-flex flex-column justify-content-center  align-items-center">
        {productData?.length > 0 ? (
          <Table className="mt-3" striped>
            <thead>
              <tr>
                <th>SR.</th>
                <th>Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Price</th>
                <th>Color</th>
                <th>Size</th>
                <th>IMG</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {productData?.map?.((e, i) => {
                return (
                  <tr>
                    <th key={e?.id} scope="row">
                      {i + 1}
                    </th>
                    <td style={{ maxWidth: "10vw" }} className="text-truncate">
                      {e?.title}
                    </td>
                    <td style={{ maxWidth: "20vw" }} className="text-truncate">
                      {e?.description}
                    </td>
                    <td style={{ maxWidth: "10vw" }} className="text-truncate">
                      {e?.category?.join(" | ")}
                    </td>
                    <td>{e?.price}</td>
                    <td>{e?.color?.join(" | ")}</td>
                    <td>{e?.size?.join(" | ")}</td>
                    <td>
                      <img
                        style={{ maxWidth: "100px", maxHeight: "100px" }}
                        src={e?.thumbnail}
                        alt=""
                      />
                    </td>
                    <td>
                      <Pencil color="#918888" />
                      <Trash2 color="#918888" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <h3 style={{ color: "#918e86" }}>Data not found...</h3>
        )}
      </div>
    </>
  );
}
