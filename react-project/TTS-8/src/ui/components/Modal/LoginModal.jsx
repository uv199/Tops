import React from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

import LoginForm from "../Form/LoginForm";

export default function LoginModal({ modal, toggle, setModal }) {
  let manageToggle = () => {
    toggle();
    setModal(true);
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <LoginForm toggle={toggle} />
          <p
            style={{ textDecoration: "underline", color: "blue" }}
            role="button"
            onClick={manageToggle}
          >
            Create new account..!
          </p>
        </ModalBody>
      </Modal>
    </div>
  );
}
