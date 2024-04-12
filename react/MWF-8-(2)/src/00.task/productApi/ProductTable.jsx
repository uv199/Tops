import { Button, Table, Input } from "reactstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Eye, PencilRuler, Search, Trash } from "lucide-react";
let sizeOptions = ["41", "42", "43", "44", "45"];
export default function ProductTable({ refresh, refetch }) {
  let [data, setData] = useState(null);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/product/getAll",
    }).then((res) => {
      setData(res.data.data);
    });
  }, [refresh]);

  const deletHandler = (id) => {
    axios({
      method: "delete",
      url: "http://localhost:9999/product/delete/" + id,
    })
      .then((res) => {
        refetch();
        alert("deleted...!");
      })
      .catch((err) => {
        console.log("-----------  err----------->", err);
      });
  };

  return (
    <div
      style={{ margin: "10px 50px", border: "1px solid gray", padding: "20px" }}
    >
      {/* <div className="d-flex justify-content-between">
        <h1>Product Table </h1>
        <div className="d-flex align-items-center">
          <Input
            placeholder="search your text heare"
            onChange={(e) => searchHandler(e)}
          />
          <Search />
        </div>
      </div> */}
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
                    {e?.color?.map?.((color, i) => {
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
                    {sizeOptions?.map?.((color, i) => {
                      return (
                        <div
                          className="pe-1 ps-1"
                          key={i}
                          style={
                            e?.size?.includes?.(color)
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
                      onClick={() => deletHandler(e._id)}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <hr />
    </div>
  );
}
