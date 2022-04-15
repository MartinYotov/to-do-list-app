import React from 'react';
import ToDo from './ToDo';
import { IToDoTask } from '../../../shared/data-types';

type ToDoListProps = {
    toDoTasks: IToDoTask[]
}
const ToDoList = ({ toDoTasks }: ToDoListProps) => {
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