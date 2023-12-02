import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import RegisterForm from "../Form/RegisterForm";

export default function RegisterModal({ toggle, modal, setModal }) {
  let manageToggle = () => {
    toggle();
    setModal(true);
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <RegisterForm manageToggle={manageToggle} toggle={toggle} />
        </ModalBody>
      </Modal>
    </div>
  );
}
