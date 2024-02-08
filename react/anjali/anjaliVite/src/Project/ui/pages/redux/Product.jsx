import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../redux/fetures/product";
import { toast } from "react-toastify";
import { Button, Table } from "reactstrap";
import axios from "axios";

export default function Product() {
  let [productData, setProductData] = useState({
    gender: "male",
    title: "Nike airJordan--anjali ma'am",
    description: "shose with comfort",
    price: 199,
    discountPercentage: 10,
    availableStock: 102,
    brand: "nike",
    category: ["casual", "highlength"],
    thumbnail:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b8523d14-0520-4294-b86e-edea1495693a/air-jordan-1-mid-se-shoes-HhrDTz.png",
    color: ["black", "white"],
    size: ["45", "44", "43", "42"],
  });

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

  const addData = () => {
    axios({
      method: "post",
      url: "http://localhost:9999/product/create/",
      data: productData,
      // headers: {
      //   Authorization: "bar" + "logintoken",
      //   "Content-Type": "application/json",
      // },
    })
      .then((res) => {
        toast.success("data addedd success,.....!");
        dispatch(fetchData());
      })
      .catch((err) => {
        toast.error("somthing is wrong");
      });
  };
  const deleteHandler = (id) => {
    console.log("-----------  id----------->", id);
    axios({
      method: "delete",
      url: `http://localhost:9999/product/delete/${id}`,
      // headers: {
      //   Authorization: "bar" + "logintoken",
      //   "Content-Type": "application/json",
      // },
    })
      .then((res) => {
        toast.success("data addedd success,.....!");
        dispatch(fetchData());
      })
      .catch((err) => {
        toast.error("somthing is wrong");
      });
  };

  return (
    <div>
      <Button onClick={addData}>Add Product</Button>
      <Table striped>
        <tr>
          <th>sr.</th>
          <th>image</th>
          <th>title</th>
          <th>action</th>
        </tr>
        {product.map((e, i) => {
          return (
            <tr key={e._id}>
              <td>{i + 1}</td>
              <td>
                <img style={{ width: "50px" }} src={e?.thumbnail} alt="" />
              </td>
              <td>{e?.title}</td>
              <td>
                <Button color="danger" onClick={() => deleteHandler(e?._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </Table>
    </div>
  );
}
