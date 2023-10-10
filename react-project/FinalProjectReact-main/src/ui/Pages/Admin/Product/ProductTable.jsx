import { Pencil, XCircle } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Table } from "reactstrap";
import { deleteProduct } from "../../../../redux/fetures/ProductSlice/productSlice";

export default () => {
  const { err, product } = useSelector((state) => state?.productReducer);
  if (err.length > 0) toast.error(err);
  const dispatch = useDispatch();
  function deleteHandler(data, index) {
    console.log("index", index);
    console.log("data", data);
    // /delete/:id
    dispatch(deleteProduct({ id: data._id, index }));
  }
  return (
    <div className="m-4">
      <Table striped>
        <thead>
          <tr>
            <th>SR.</th>
            <th>IMAGE</th>
            <th>TITLE</th>
            <th>DESCRIPTION</th>
            <th>PRICE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {product.map((e, i) => {
            return (
              <tr key={e?.id}>
                <th scope="row">{i + 1}</th>
                <td style={{ maxWidth: "20vw" }}>
                  <img
                    style={{ maxHeight: "50px" }}
                    src={e?.thumbnail}
                    alt=""
                  />
                </td>
                <td>{e.title}</td>
                <td style={{ maxWidth: "20vw" }} className="text-truncate ">
                  {e?.description}
                </td>
                <td>{e?.price}</td>
                <td>
                  <Pencil color="#979191" className="m-2" role="button" />
                  <XCircle
                    color="#979191"
                    className="m-2"
                    role="button"
                    n
                    onClick={() => deleteHandler(e, i)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
