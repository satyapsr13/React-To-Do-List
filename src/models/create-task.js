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
          <ModalHeader>
            <h5>Title</h5>
            <input type="text " className="pr-7 w-70vh" />
          </ModalHeader>

          <ModalBody>
            <h5>Task</h5>
            <input type="text" />
            <div className="addbutton d-flex flex-row-reverse">
              {/* <div className="none"></div> */}
              <button className="btn btn-success p-2  m-1">Submit</button>
            </div>
          </ModalBody>
        </Modal>
        {/* <Button color="primary" onClick={toggle}>
          Open Modal
        </Button>
        <Button color="secondary" onClick={toggle}>
          Open Modal
        </Button> */}
      </div>
    </>
  );
}

export default CreateTask;
