import React, { useCallback, useContext, useEffect, useState } from 'react';
import ToDo from './ToDo';
import { IToDoTask } from '../../../shared/data-types';
import { ServiceContext } from '../App';
import { IToDoService } from '../services/todo-service';

const ToDoList = () => {
    const toDoService: IToDoService = useContext<IToDoService>(ServiceContext);
    const [toDoTasks, setToDoTasks] = useState<IToDoTask[]>([]);

    const getToDoTasks = useCallback(async () => {
        toDoService.getToDoTasks()
        .then(res => {
            setToDoTasks(res.data);
        })
        .catch(err => alert(err.response.data)) 
    }, [toDoService]);

    useEffect(() => {
        getToDoTasks();
    }, [getToDoTasks]);

    return (
      <div id="toDoList">
        <hr />
        { toDoTasks.map(toDo => <ToDo key={toDo.id} {...toDo} />) }
        <hr />
        <div id="done">
          Done:
            { 
              toDoTasks.reduce((count: number, toDo: IToDoTask) => {
                  return count + (toDo.completed ? 1 : 0)
              }, 0)
            }
        </div>
          
      </div>
    );
}

export default ToDoList;