import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "reactstrap";
import { incAmount, amtIncByValue, addName } from "../Redux/fetures/Amount/amount";

export default function AmountCom() {

let [amounrNum , setAnmountNum] = useState(0);
let [userName , setUserName] = useState("");
  let data = useSelector((state) => state.amountReducer);

  const dispatch = useDispatch();

    const amountdata = () =>{
        dispatch(amtIncByValue(+amounrNum))
        setAnmountNum("")
    }
    const userData = () =>{
        dispatch(addName(userName))
        setAnmountNum("")
    }
  
  return (
    <div>
    
      <h1>Amount is {data.amount}</h1>
      <Input type="number"  value={amounrNum} onChange={(e) => setAnmountNum (e.target.value)}  />

      <h1>My Name is {data.name}</h1>
      <Input type="text"  value={userName} onChange={(e) => setUserName (e.target.value)}  />
      <div className="d-flex gap-5 mt-4 ">
      <Button color="danger" onClick={() => amountdata()} >inc</Button>
      <Button color="success" onClick={() => userData()} >Enter</Button>
      <Button onClick={() => dispatch (incAmount())} >inc</Button>
      </div>
    </div>
  );
}
