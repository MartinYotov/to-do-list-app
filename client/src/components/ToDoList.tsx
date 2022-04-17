import React, { useCallback, useContext, useEffect } from 'react';
import ToDo from './ToDo';
import { IToDoTask } from '../../../shared/data-types';
import { ServiceContext } from '../App';
import { IToDoService } from '../services/todo-service';
import { useDispatch, useSelector } from 'react-redux';
import { createSetToDoTasksAction } from '../redux/actions';
import { getDoneCount, getToDoTasksByFilter } from '../redux/selectors';

const ToDoList = () => {
    const toDoService: IToDoService = useContext<IToDoService>(ServiceContext);
    const toDoTasks: IToDoTask[] = useSelector(getToDoTasksByFilter);
    const doneCount: number = useSelector(getDoneCount);
    const dispatch = useDispatch();

    const getToDoTasks = useCallback(async () => {
        toDoService.getToDoTasks()
        .then(res => {
            dispatch(createSetToDoTasksAction(res.data));
        })
        .catch(err => alert(err.response.data.error));
    }, [toDoService, dispatch]);

    useEffect(() => {
        getToDoTasks();
    }, [getToDoTasks]);

    return (
      <div id="toDoList">
        <hr />
        { 
            toDoTasks.length ? 
            toDoTasks.map(toDo => <ToDo key={toDo.id} {...toDo} />) :
            <p>You don't have any tasks yet.</p>
        }                    
        <hr />
        <div id="done">
          <span>Done: </span> {doneCount}
        </div>
          
      </div>
    );
}

export default ToDoList;