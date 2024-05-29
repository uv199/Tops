import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { deleteData, updateData } from "./redux/userslice";

export default function UserTable() {
  let dataArr = useSelector((store) => store?.userSlice?.users);

  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {dataArr?.map?.((e, i) => {
          return (
            <li className="m-2">
              <Button
                color="danger"
                className="me-3"
                onClick={() => dispatch(deleteData(i))}
              >
                Delete
              </Button>
              <Button
                color="danger"
                className="me-3"
                onClick={() => dispatch(updateData({ data: e, index: i }))}
              >
                Edit
              </Button>
              {e?.email} | {e?.password}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
