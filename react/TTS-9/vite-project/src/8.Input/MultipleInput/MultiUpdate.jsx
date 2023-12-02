import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

export default function MultiUpdate() {
  let [user, setUser] = useState({
    email: "",
    password: "",
  });
  let [index, setIndex] = useState(null);
  let [allUser, setAllUser] = useState([]);

  const addData = (e) => {
    if (user?.email?.length > 0 && user?.password?.length > 0) {
      e.preventDefault();
      setAllUser([...allUser, user]);
      toast.success("User Added succesfully");
      setUser({
        email: "",
        password: "",
      });
    } else {
      toast.error("Please fill data");
    }
  };

  const updateData = () => {
    // to check index available or not
    if (index || index === 0) {
      // null/0/false/undefined
      allUser.splice(index, 1, user);
      setUser([...allUser]);

      // to blank input form 
      setUser({
        email: "",
        password: "",
      });
      setIndex(null);
    } else {
      toast("Please select data");
    }
  };

  const updateHandler = (data, index) => {
    setUser(data);
    setIndex(index);
  };
  return (
    <>
      <Form className="border border-dark p-3 rounded-3">
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            value={user?.email}
            id="exampleEmail"
            name="email"
            placeholder="Enter your email"
            type="email"
            onChange={(e) => setUser({ ...user, email: e?.target?.value })}
          />
        </FormGroup>

        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            value={user?.password}
            placeholder="Enter your password"
            type="password"
            onChange={(e) => setUser({ ...user, password: e?.target?.value })}
          />
        </FormGroup>
        {index || index === 0 ? (
          <Button onClick={updateData} className="w-100" color="danger">
            Update
          </Button>
        ) : (
          <Button onClick={(e) => addData(e)} className="w-100" color="danger">
            Submit
          </Button>
        )}
      </Form>

      <Table striped>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allUser.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e.email}</td>
                <td style={{ color: "green" }}>{e.password}</td>
                <td>
                  <Button onClick={() => updateHandler(e, i)} color="danger">
                    Update
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

/*
function delete1(i) {
 console.log(i) 
}

[1,2,3].map((e,i)=>{
delete1(i)
<h1 onCLick={()=>delete1(e,i)})>1</h1>
})



<h1 onCLick={()=>delete1(1,0)})>1</h1>
<h1 onCLick={()=>delete1(2,1)})>2</h1>
<h1 onCLick={()=>delete1(3,2)})>3</h1>

*/

/*
 let a= [ 1,2,3,4,5]


 // index =  2

 let filterdData = a.filter((e,i)=>{
  return index !==i 
 })

*/
