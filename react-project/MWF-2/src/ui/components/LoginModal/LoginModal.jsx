import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
export default function LoginModal({ modal, toggle, registerToggle }) {
  const toggleHandler = () => {
    toggle();
    registerToggle();
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <h3>Login</h3>
        </ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <p>
            Create Account..?
            <span
              className="ps-2 text-info text-decoration-underline"
              role={"button"}
              onClick={toggleHandler}
            >
              SignUp
            </span>
          </p>
        </ModalBody>
      </Modal>
    </div>
  );
}
