import React from "react";
import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap";
function CreateTask({ modal, toggle }) {
  return (
    <>
      <div
        style={{
          display: "block",
          width: 700,
          padding: 30,
        }}
      >
         
        <Modal
          isOpen={modal}
          toggle={toggle}
          modalTransition={{ timeout: 2000 }}
        >
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            possimus magni saepe corrupti beatae incidunt placeat. Ipsam
            quaerat, consequuntur minima, voluptates error incidunt dolore animi
            excepturi facilis porro consectetur at.
          </ModalBody>
        </Modal>
        <Button color="primary" onClick={toggle}>
          Open Modal
        </Button>
        <Button color="secondary" onClick={toggle}>
          Open Modal
        </Button>
      </div>
    </>
  );
}

export default CreateTask;
