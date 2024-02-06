import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../redux/fetures/product";
import { toast } from "react-toastify";
import { Table } from "reactstrap";

export default function Product() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const { product, error, pending } = useSelector(
    (state) => state.productReducer
  );
  if (error.length > 0) {
    toast.error(error);
  }

  if (pending) return <h1>pending.....</h1>;

  console.log("-----------  product----------->", product);
  return (
    <div>
      <Table striped>
        <tr>
          <th>sr.</th>
          <th>image</th>
          <th>title</th>
        </tr>
        {product.map((e) => {
          return (
            <tr>
              <td>
                <img style={{ width: "50px" }} src={e?.image} alt="" />
              </td>
              <td>{e?.title}</td>
            </tr>
          );
        })}
      </Table>
    </div>
  );
}
