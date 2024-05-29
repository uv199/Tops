import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function UseEffectProject() {
  const [modal, setModal] = useState(false);
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);

  const toggle = () => setModal(!modal);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       toggle();
  //     }, 3000);
  //   }, []);

  useEffect(() => {
    if (count % 10 === 0 && count !== 0) {
      alert("nothing....!");
    }
  }, [count]);

  useEffect(() => {
    if (count === count2 && count !== 0) {
      setTimeout(() => {
        alert("Count and count 2 are same");
      }, 0);
    }
  }, [count, count2]);

  return (
    <div>
      <h1>Hello User</h1>
      <h1>Count is {count}</h1>
      <button className="base-btn" onClick={() => setCount(count + 1)}>
        Click to increase Count
      </button>
      <hr />
      <h1>Count-2 is {count2}</h1>
      <button className="base-btn" onClick={() => setCount2(count2 + 1)}>
        Click to increase Count-2
      </button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
