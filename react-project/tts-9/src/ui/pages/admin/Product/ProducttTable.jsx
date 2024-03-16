import { Button, Table } from "reactstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Eye, PencilRuler, Trash } from "lucide-react";
let sizeOptions = ["41", "42", "43", "44", "45"];
import ReactPaginate from "react-paginate";
export default function ProducttTable({
  refresh,
  refresHandler,
  setProduct,
  toggle,
  UpdateHandler,
  Preview,
}) {
  let [data, setData] = useState(null);
  let [paginate, setPeginate] = useState({
    limit: 10,
    page: 1,
    totalProduct: 0,
  });

  console.log("-----------  paginate----------->", paginate)
  useEffect(() => {
    console.log("--=-=-=-=-=->");
    axios({
      method: "get",
      url: "http://localhost:9999/product/getAllPaginate",
      params: {
        limit: paginate.limit,
        page: paginate.page,
      },
    }).then((res) => {
      console.log("-----------  res----------->", res.data);
      setData(res.data.data);
      setPeginate({ ...paginate, totalProduct: res.data.count });
    });
  }, [refresh]);

  const updateHandler = (e) => {
    toggle();
    setProduct(e);
    UpdateHandler();
  };

  const deletHandler = (e) => {
    axios({
      method: "delete",
      url: `http://localhost:9999/product/delete/${e?._id}`,
      data: data,
    })
      .then((res) => {
        toast.success("delet succesfully");
        if (data.length === 1) {
          setPeginate({ ...paginate, page: paginate.page - 1 });
        }
        refresHandler();
      })
      .catch((err) => {
        toast.error("somthing wrong");
      });
  };

  const handlePageClick = (e) => {
    setPeginate({ ...paginate, page: e?.selected + 1 });
    refresHandler();
  };
  return (
    <div
      style={{ margin: "10px 50px", border: "1px solid gray", padding: "20px" }}
    >
      <h1>Product Table </h1>
      <hr />
      <Table>
        <thead>
          <tr>
            {["Sr", "Image", "Name", "Price", "Color", "Size", "Action"].map(
              (e, i) => {
                return <th key={i}>{e}</th>;
              }
            )}
          </tr>
        </thead>
        <tbody>
          {data?.map?.((e, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <img
                    style={{ height: "30px" }}
                    src={e?.thumbnail}
                    alt="ajkkj"
                  />
                </td>
                <td>{e?.title}</td>
                <td>{e?.price}</td>
                <td>
                  <div className="d-flex gap-2">
                    {e?.color.map((color, i) => {
                      return (
                        <div
                          style={{
                            height: "10px",
                            width: "10px",
                            border: "1px solid black",
                            borderRadius: "50%",
                            backgroundColor: color,
                          }}
                          key={i}
                        ></div>
                      );
                    })}
                  </div>
                </td>
                <td>
                  <div className="d-flex gap-2">
                    {sizeOptions.map((color, i) => {
                      return (
                        <div
                          className="pe-1 ps-1"
                          key={i}
                          style={
                            e.size.includes(color)
                              ? { color: "black", border: "1px solid black" }
                              : { color: "gray", border: "1px solid gray" }
                          }
                        >
                          {color}
                        </div>
                      );
                    })}
                  </div>
                </td>
                <td>
                  <div className="d-flex gap-3 justify-content-center">
                    <Eye role="button" onClick={() => Preview(e)} />
                    <PencilRuler
                      role="button"
                      onClick={() => updateHandler(e)}
                    />
                    <Trash
                      role="button"
                      color="red"
                      onClick={() => deletHandler(e)}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <hr />

      <ReactPaginate
        className="d-flex gap-3"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={paginate.totalProduct / paginate.limit}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
