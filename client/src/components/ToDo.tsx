import React, { useContext, FocusEvent, KeyboardEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { IToDoTask } from '../../../shared/data-types';
import { ServiceContext } from '../App';
import { createDeleteToDoTaskAction, createEditToDoTaskCompletedAction, createEditToDoTaskTextAction } from '../redux/actions';
import { IToDoService } from '../services/todo-service';

const ToDo = ({ id, text, completed }: IToDoTask) => {
    const toDoService: IToDoService = useContext<IToDoService>(ServiceContext);
    const dispatch = useDispatch();

    const onDeleteClick = () => { 
        toDoService.deleteToDoTask(id)
            .then(res => {
                dispatch(createDeleteToDoTaskAction(id));
            })
            .catch(err => alert(err.response.data.error));
    }
    
    const onInputBlurHandler = (e: FocusEvent<HTMLInputElement>): void => {
        const text: string = e.target.value;
        if (text) {
            toDoService.editToDoText(id, text)
                .then(res => {
                    dispatch(createEditToDoTaskTextAction(id, text));
                })
                .catch(err => alert(err.response.data.error));
        }
    }

    const onInputKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            e.preventDefault();
            
            const input = e.target as HTMLInputElement; 
            input.blur();
        }
    }

    const onCheckChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const completed: boolean = e.target.checked;
        toDoService.editToDoCompleted(id, completed)
            .then(res => {
                dispatch(createEditToDoTaskCompletedAction(id, completed));
            })
            .catch(err => alert(err.response.data.error));
    }

    return (
      <div className={"to-do-task" + (completed ? " completed" : "") }>
          <input className='task-checkbox' type={'checkbox'} checked={completed} onChange={onCheckChange} />
          <input className='task-text' defaultValue={text} 
            onBlur={onInputBlurHandler} onKeyDown={onInputKeyDownHandler} />
          <button className='delete-task' onClick={onDeleteClick}><span>x</span></button>
      </div>
    );
}

export default ToDo;