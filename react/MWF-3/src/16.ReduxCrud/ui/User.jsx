import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllUser } from "../redux/fetures/user";
import { Button } from "reactstrap";
import "./User.css"

export default function User() {
  let data = useSelector((store) => {
    return store?.userReducer;
  });

  if(data.pending){
    return <div className="container">
      <img src="https://art.pixilart.com/7517cef825826dd.gif" width="100px" height="100px" style={{borderRadius: "50%"}} className="pac-man" />
      <div className="dots">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/GAudit_YellowDot.png" width="10px" height="10px" className="food" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/GAudit_YellowDot.png" width="10px" height="10px" className="food" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/GAudit_YellowDot.png" width="10px" height="10px" className="food" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/GAudit_YellowDot.png" width="10px" height="10px" className="food" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/GAudit_YellowDot.png" width="10px" height="10px" className="food" />
      </div>
    </div>
  }

  console.log("-----------  data----------->", data.pending);

  const dispatch = useDispatch();
  console.log("-----------  data----------->", data);
  return (
    <>
      {data.pending === false ? (
        <div>
          <Button onClick={() => dispatch(fetchAllUser(100))}>Call APi</Button>
        </div>
      ) : (
     
      <h1>Loading....</h1>
      )}
    </>
  );
}
