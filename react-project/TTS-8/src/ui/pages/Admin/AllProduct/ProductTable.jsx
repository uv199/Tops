import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "reactstrap";
import { fetchProduct } from "../../../../redux/fetures/product/product";
import { toast } from "react-toastify";
import "./index.css";
import { Eye, Trash } from "lucide-react";
import axios from "axios";
import { BE_URL } from "../../../../config";
import { useSearchParams } from "react-router-dom";

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
import PaginationCom from "../../../components/Pagination/PaginationCom";

export default function ProductTable({ toggle, pagination, setTotalCount }) {
  let [allProduct, setAllProduct] = useState([]);

  let [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct({ page: pagination?.page, limit: 10 }));
    // window.scrollTo(0, document.body.scrollHeight);
  }, [pagination]);

  const data = useSelector((state) => state.productReducer);

  useEffect(() => {
    if (data.error.length > 0) {
      toast.error(data.error);
    }
    setAllProduct(data.products);
    setTotalCount(data?.count);
  }, [data]);

  // delete logic
  const deleteHandler = (id) => {
    console.log("-----------  id----------->", id);

    axios({
      method: "delete",
      url: `${BE_URL}/product/delete/${id}`,
      headers: {
        authorization: `Berer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => {
        toast.success("product Deleted");
        dispatch(fetchProduct({ page: pagination?.page, limit: 10 }));
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const updateHandler = (data) => {
    toggle();
    setSearchParams({ id: data?._id });
  };
  return (
    <div style={{ overflow: "scroll" }}>
      {data.pending ? (
        <h1>fetching data......!</h1>
      ) : (
        <>
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
                    <th scope="row">{(pagination?.page - 1) * 10 + i + 1}</th>
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
                      <Eye
                        role="button"
                        color="#a8a8a7"
                        className="me-2"
                        onClick={() => updateHandler(e)}
                      />
                      <Trash
                        role="button"
                        color="#a8a8a7"
                        onClick={() => deleteHandler(e?._id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          '<h1>{pagination?.totalProduct}</h1>
        </>
      )}
    </div>
  );
}

/*

1-1 1*10 + 0+1= 11 
21

*/
