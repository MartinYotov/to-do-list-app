import React, { useCallback, useContext, useEffect, useState } from 'react';
import ToDo from './ToDo';
import { IToDoTask } from '../../../shared/data-types';
import { ServiceContext } from '../App';
import { IToDoService } from '../services/todo-service';
import { useDispatch, useSelector } from 'react-redux';
import { ToDoAppState } from '../redux/reducers';
import { createSetToDoTasksAction } from '../redux/actions';

const ToDoList = () => {
    const toDoService: IToDoService = useContext<IToDoService>(ServiceContext);
    const toDoTasks: IToDoTask[] = useSelector((state: ToDoAppState) => Array.from(state.toDoTasksList.values()));
    const dispatch = useDispatch();

    const getToDoTasks = useCallback(async () => {
        toDoService.getToDoTasks()
        .then(res => {
            dispatch(createSetToDoTasksAction(res.data));

        })
        .catch(err => alert(err.response.data)) 
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