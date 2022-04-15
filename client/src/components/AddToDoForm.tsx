import React from 'react';

const AddToDoFrom = () => {
  return (
    <div id="addToDo">
        <div id="addInput">
            <input className="form-control" placeholder="Enter new task" />
        </div>
        <button id="addBtn" className='btn btn-primary'>Add Task</button>
    </div>
  );
}

export default AddToDoFrom; 