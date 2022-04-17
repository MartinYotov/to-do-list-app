import React, { KeyboardEvent, useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ServiceContext } from '../App';
import { createAddToDoTaskAction } from '../redux/actions';
import { IToDoService } from '../services/todo-service';

const AddToDoFrom = () => {
    const toDoService: IToDoService = useContext<IToDoService>(ServiceContext);
    const [newTaskText, setNewTaskText] = useState<string>('');
    const dispatch = useDispatch();    

    const submitTask = () => {
      toDoService.addToDoTask({ text: newTaskText })
        .then(res => {
            dispatch(createAddToDoTaskAction(res.data));
            setNewTaskText('');
        })
        .catch(err => alert(err.response.data.error));
    }

    const onNewTaskInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        submitTask();
      }
    };

    return (
      <div id="addToDo">
          <div id="addInput">
              <input className="form-control" placeholder="Enter new task" value={newTaskText} 
                onChange={e => setNewTaskText(e.target.value)} onKeyDown={onNewTaskInputKeyDown} />
          </div>
          <button id="addBtn" className='btn btn-primary' disabled={!newTaskText} onClick={submitTask}>Add Task</button>
      </div>
    );
}

export default AddToDoFrom; 