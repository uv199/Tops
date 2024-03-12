import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getAllProduct } from "../../../../redux/fetures/product/product";
import { Table } from "reactstrap";

export default function TableCome() {
  const [allProduct, setAllProduct] = useState([]);

  const productSlice = useSelector((state) => state.productSlice);
  useEffect(() => {
    console.log("-----------  data----------->", data);
    setAllProduct(productSlice.product);
  }, []);

  // PRODUCT DELETE HANDLER
  const deleteHandler = (id) => {
    axios({
      method: "delete",
      url: `http://localhost:9999/product/delete/${id}`,
    })
      ?.then((res) => {
        toast.success("Product Delete...!");
        refetchData();
      })
      ?.catch((err) => {
        toast.error(err);
      });
  };

  const editHandler = (data) => {
    toggle();
    setProduct(data);
    setUpdateMode(true);
  };

  // UPDATE HANDLER
  const updataData = () => {
    axios({
      method: "put",
      url: `http://localhost:9999/product/update/${product?._id}`,
      data: product,
    })
      ?.then((res) => {
        toast.success("Data Updata...!");
        setProduct(intialProduct);
        toggle();
        refetchData();
      })
      ?.catch((err) => {
        toast.error(err);
      });
  };

  const previouHandler = (id) => {
    axios({
      method: "get",
      url: `http://localhost:9999/product/getProductById/${id}`,
      data: product,
    })
      ?.then((res) => {
        // console.log(res?.data?.data)
        setSelectedProductDetails(res?.data?.data);
        setDetailModal(true);
      })
      ?.catch((err) => {
        toast.error(err);
      });
  };

  return (
    <div>
      <Table striped className="text-center">
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Image</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allProduct?.map((e, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <img src={e?.thumbnail} alt="" height="50px" />
                </td>
                <td>{e?.title}</td>
                <td>{e?.brand}</td>
                <td>₹ {e?.price}</td>
                <td>
                  <Edit
                    role="button"
                    color="#81adef"
                    onClick={() => editHandler(e)}
                  />
                  <Slash style={{ rotate: "-21deg" }} />
                  <Trash
                    role="button"
                    color="#f22b2b"
                    onClick={() => deleteHandler(e?._id)}
                  />
                  <Slash style={{ rotate: "-21deg" }} />
                  <Eye
                    role="button"
                    color="#81adee"
                    onClick={() => previouHandler(e?._id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
