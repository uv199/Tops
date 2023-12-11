import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

import ProductForm from "../Form/ProductForm";

export default function ProductModal({ modal, toggle }) {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <ProductForm toggle={toggle} />
        </ModalBody>
      </Modal>
    </div>
  );
}
