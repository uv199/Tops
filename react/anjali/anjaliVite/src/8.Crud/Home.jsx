import Header from "./Header";
import React, { useEffect, useState } from "react";
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
  useEffect(() => {
    let jsonData = localStorage?.getItem("userData") || "[]";
    let normalData = JSON?.parse(jsonData);
    setUserArray(normalData);
  }, []);

  useEffect(() => {
    localStorage?.setItem("userData", JSON?.stringify?.(userArray));
  }, [userArray]);

  return (
    <>
      <Header />
      <div style={{ width: "100%", backgroundColor: "darkgray" }}>
        <div className=" d-flex pe-4 p-3 ">
          <div className="w-75 text-center">
            <h1>USER TABLE</h1>
          </div>
          <div className="w-25 align-items-center d-flex justify-content-end">
            <Button
              style={{ maxHeight: "40px" }}
              color="danger"
              onClick={toggle}
            >
              Add User
            </Button>
          </div>
        </div>
        <DataTable userArray={userArray} toggle={toggle} />
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
