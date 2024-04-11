import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

export default function ModalCom({ modal, toggle, product }) {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <img style={{ height: "100px" }} src={product.image} alt="" />
        </ModalBody>
      </Modal>
    </div>
  );
}
