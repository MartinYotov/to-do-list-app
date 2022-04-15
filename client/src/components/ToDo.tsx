import React from 'react';
import { IToDoTask } from '../../../shared/data-types';

const ToDo = ({ id, text, completed }: IToDoTask) => {
  return (
    <div className={"to-do-task" + (completed ? " completed" : "") }>
        <input className='task-checkbox' type={'checkbox'} checked={completed} />
        <input className='task-text' defaultValue={text} />
        <button className='delete-task'><span>x</span></button>
    </div>
  );
}

export default ToDo;