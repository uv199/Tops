import { Pencil, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "reactstrap";
import { removeName } from "../../redux/fetures/nameList/Name";

export default function NameDisplay(props) {
  let [dataArr, setDataArr] = useState([]);

  const data = useSelector((state) => {
    return state.NAME.nameArr;
  });

  const count = useSelector((state) => state.COUNT.count);
  const dispatch = useDispatch();
  useEffect(() => {
    setDataArr(data);
  }, [data]);

  const deleteHandler = (index) => {
    dispatch(removeName(index));
  };
  const editHandler = (i, e) => {
    props.setIndex(i);
    props.setInputData(e);
  };

  return (
    <div>
      <hr />
      <h1>Total Online user is {count} </h1>
      <hr />
      <Table striped>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {dataArr?.map?.((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e}</td>
                <td>
                  <Pencil className="me-5" onClick={() => editHandler(i, e)} />
                  <Trash2 onClick={() => deleteHandler(i)} color="#d04e4e" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
