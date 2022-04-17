import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ServiceContext } from '../App';
import { createAddToDoTaskAction } from '../redux/actions';
import { IToDoService } from '../services/todo-service';

const AddToDoFrom = () => {
    const toDoService: IToDoService = useContext<IToDoService>(ServiceContext);
    const [newTaskText, setNewTaskText] = useState<string>('');
    const dispatch = useDispatch();

    const onAddTaskClick = () => {
      toDoService.addToDoTask({ text: newTaskText })
        .then(res => {
            dispatch(createAddToDoTaskAction(res.data));
            setNewTaskText('');
        })
        .catch(err => alert(err.response.data.error));
    }

    return (
      <div id="addToDo">
          <div id="addInput">
              <input className="form-control" placeholder="Enter new task"
                value={newTaskText} onChange={e => setNewTaskText(e.target.value)} />
          </div>
          <button id="addBtn" className='btn btn-primary' disabled={!newTaskText} onClick={onAddTaskClick}>Add Task</button>
      </div>
    );
}

export default AddToDoFrom; 