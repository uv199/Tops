import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

let intialData = {
  email: "",
  password: "",
  userType: "User",
};
export default ({ toggle, modal }) => {
  const [user, setUser] = useState(intialData);

  const addUser = (e) => {
    e.preventDefault();
    let oldData = localStorage.getItem("userData");
    let convertedOldData = JSON.parse(oldData) || [];
    if (convertedOldData.find((e) => e.email === user?.email)) {
      toast.info(" email is already exist");
    } else {
      let finalData = [...convertedOldData, user];
      localStorage.setItem("userData", JSON.stringify(finalData));
      localStorage.setItem("user", JSON.stringify(user));
      setUser(intialData);
      toggle();
    }
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className="text-center" toggle={toggle}>
          Register User
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={addUser}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="with a placeholder"
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e?.target?.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="password placeholder"
                type="password"
                value={user.password}
                onChange={(e) =>
                  setUser({ ...user, password: e?.target?.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Select</Label>
              <Input
                id="exampleSelect"
                value={user?.userType}
                onChange={(e) =>
                  setUser({ ...user, userType: e?.target?.value })
                }
                name="select"
                type="select"
              >
                <option>Admin</option>
                <option>User</option>
              </Input>
            </FormGroup>
            <p role="button" className="text-decoration-underline text-primary">
              Alredy have account...!
            </p>
            <Button color="danger" className="w-100">
              Submit
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

// let user ={newData}
// let convertedOldDsta = [{oldData}]

// let finalData = [...oldData,user]

/*
filter =[{},{}]
find= {}
*/

/*
1. same email ka dusra user add nahi hona chahiye 
*/
