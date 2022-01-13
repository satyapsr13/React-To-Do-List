import React from "react";
import CreateTask from "../models/create-task";
function ToDoList() {
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);
  return (
    <>
      <div className="header text-center">
        <h3 className="mt-3">To Do List</h3>
        <button className="btn btn-primary" onClick={() => setModal(true)}>
          Add Task
        </button>
      </div>
      <CreateTask toggle={toggle} modal={modal} />
    </>
    // {/* </CreateTask> */}
  );
}

export default ToDoList;
