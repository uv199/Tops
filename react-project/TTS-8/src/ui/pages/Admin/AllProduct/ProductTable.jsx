import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "reactstrap";
import { fetchProduct } from "../../../../redux/fetures/product/product";
import { toast } from "react-toastify";
import { Eye } from "lucide-react";

export default function ProductTable() {
  let [allProduct, setAllProduct] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const data = useSelector((state) => state.productReducer);
  console.log("-----------  data----------->", data.products)

  useEffect(() => {
    if (data.error.length > 0) {
      toast.error(data.error);
    }
    setAllProduct(data.products);
  }, []);

  return (
    <div>
      {data.pending ? (
        <h1>fetching data......!</h1>
      ) : (
        <Table striped>
          <thead>
            <tr>
              <th>SR</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>NUMBER</th>
              <th>CITY</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {allProduct?.map?.((e, i) => {
              return (
                <tr key={e?._id}>
                  <th scope="row">{i + 1}</th>
                  <td>{e?.name}</td>
                  <td>{e?.email}</td>
                  <td>{e?.number}</td>
                  <td>{"city name"}</td>
                  <td>
                    <Eye role="button" color="#747272" />
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
