import Header from "./Header";
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import MultiInput from "./MultiInput";
import DataTable from "./DataTable";

export default function Home(args) {
  const [modal, setModal] = useState(false);
  let [user, setUser] = useState({
    email: "",
    password: "",
    hobby: [],
  });

  let [userArray, setUserArray] = useState([]);
  const toggle = () => setModal(!modal);

  return (
    <>
      <Header />
      <div style={{ width: "100%", backgroundColor: "darkgray" }}>
        <div className="d-flex justify-content-end pe-4 p-3 ">
          <Button color="danger" onClick={toggle}>
            Add User
          </Button>
        </div>
        <DataTable />
        <Modal isOpen={modal} toggle={toggle} {...args}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            <MultiInput
              user={user}
              setUser={setUser}
              userArray={userArray}
              setUserArray={setUserArray}
              toggle={toggle}
            />
          </ModalBody>
        </Modal>
      </div>
    </>
  );
}
