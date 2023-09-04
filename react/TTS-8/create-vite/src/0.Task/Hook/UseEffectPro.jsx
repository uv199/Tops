import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function UseEffectPro() {
  let [modal, setModal] = useState(false);
  let [count, setCount] = useState(0);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    setTimeout(() => {
      toggle();
    }, 5000);
  }, []);

  useEffect(() => {
    console.log("------->everytime------->");
  });

  useEffect(() => {
    if (count === 10) confirm("do you want to do further");
  }, [count]);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>test</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <h1>{count}</h1>
      <Button color="danger" outline onClick={() => setCount(++count)}>
        increment
      </Button>
    </div>
  );
}
