import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "reactstrap";
import { fetchProduct } from "../../../../redux/fetures/product/product";
import { toast } from "react-toastify";
import "./index.css";
import { Eye } from "lucide-react";

const StyleRow = ({ arr1, ele }) => {
  let available = arr1?.includes?.(`${ele}`) ? "black" : "gray";
  return (
    <span
      style={{
        border: `1px solid ${available}`,
        margin: "2px",
        borderRadius: "4px",
        color: available,
      }}
      className="p-1 rounded-1"
    >
      {ele}
    </span>
  );
};

export default function ProductTable() {
  let [allProduct, setAllProduct] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const data = useSelector((state) => state.productReducer);

  useEffect(() => {
    if (data.error.length > 0) {
      toast.error(data.error);
    }
    setAllProduct(data.products);
  }, []);

  return (
    <div style={{ overflow: "scroll" }}>
      {data.pending ? (
        <h1>fetching data......!</h1>
      ) : (
        <Table striped>
          <thead>
            <tr>
              <th>SR</th>
              <th>IMAGE</th>
              <th>TITLE</th>
              <th>AVAILABLE STOCK</th>
              <th>PRICE</th>
              <th>DISCOUNT (%)</th>
              <th>SIZE</th>
              <th>COLOR</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {allProduct?.map?.((e, i) => {
              return (
                <tr key={e?._id}>
                  <th scope="row">{i + 1}</th>
                  <td>
                    <img
                      style={{ maxHeight: "40px" }}
                      src={e?.thumbnail}
                      alt="img"
                    />
                  </td>
                  <td>{e?.title}</td>
                  <td>{e?.availableStock || 0}</td>
                  <td>{e?.price || 0}</td>
                  <td>{e?.discountPercentage || 0}</td>
                  <td>
                    {[41, 42, 43, 44, 45].map?.((ele, i) => {
                      return <StyleRow key={i} arr1={e.size} ele={ele} />;
                    })}
                  </td>
                  <td>
                    {e?.color?.map?.((col) => {
                      return (
                        <span
                          style={{
                            border: "1px solid darkgray",
                            display: "inline-block",
                            width: "20px",
                            height: "20px",
                            margin: "3px",

                            backgroundColor: col,
                          }}
                          className="border rounded-2 "
                        ></span>
                      );
                    })}
                  </td>
                  <td>
                    <Eye role="button" color="#a8a8a7" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
}
