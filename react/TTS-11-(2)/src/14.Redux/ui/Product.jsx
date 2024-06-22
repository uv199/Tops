import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "reactstrap";
import { fetchProduct } from "../redux/product";
import { Eye } from "lucide-react";
import { toast } from "react-toastify";

export default function Product() {
  const dispatch = useDispatch();

  let data = useSelector((store) => store.productSlice);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  console.log("-----------  data----------->", data);

  if (data.error) {
    toast.error("somthing went wrong");
  }
  return (
    <div>
      {/* <Button onClick={() => dispatch(fetchProduct())}>Call APi</Button> */}
      {data.pending ? (
        <h1>Loading </h1>
      ) : (
        <Table striped>
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.product?.map((e, i) => {
              return (
                <tr key={e.id}>
                  <th scope="row">{i + 1}</th>
                  <td>
                    <img style={{ height: "40px" }} src={e.image} />
                  </td>
                  <td>{e?.title}</td>
                  <td>{e?.price}</td>
                  <td>
                    <Eye
                      role="button"
                      onClick={() => navigate(`/product/${e.id}`)}
                    />
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
