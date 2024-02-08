import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "reactstrap";
import { getTopFiveExpensive } from "../../../../redux/fetures/product";

export default function Home() {
  let [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopFiveExpensive());
  }, []);

  const { topFiveExpensive } = useSelector((state) => state.productReducer);

  console.log("-----------  topFiveExpensive----------->", topFiveExpensive);

  useEffect(() => {
    setData(topFiveExpensive);
  }, [topFiveExpensive]);

  return (
    <div>
      <Table striped>
        <tr>
          <th>sr.</th>
          <th>image</th>
          <th>title</th>
          <th>price</th>
        </tr>
        {data.map((e, i) => {
          return (
            <tr key={e._id}>
              <td>{i + 1}</td>
              <td>
                <img style={{ width: "50px" }} src={e?.thumbnail} alt="" />
              </td>
              <td>{e?.title}</td>
              <td>{e?.price}</td>
            </tr>
          );
        })}
      </Table>
    </div>
  );
}
