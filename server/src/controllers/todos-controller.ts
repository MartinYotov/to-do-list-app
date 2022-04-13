import { Request, Response } from 'express';
import { IToDoTask, INewToDoTaskInfo, IDeleteToDoTaskInfo } from '../../../shared/data-types';
import { toDoTasksMap } from '../data/data-store';
import { v4 as uuidv4 } from 'uuid';
import { badRequest, notFound } from '../helpers/error-helpers';

const getToDoTasks = (req: Request, res: Response): Response<IToDoTask[]> => {
    const toDoTasks = [...toDoTasksMap.values()];

    return res.status(200).json(toDoTasks);  
}

const addToDoTask = (req: Request, res: Response): Response<IToDoTask> => {
    const { text }: INewToDoTaskInfo = req.body;

    if (!text) {
        return badRequest(res, 'ToDo task\'s text is required!');  
    } 

    const newToDoTask: IToDoTask = {
        id: uuidv4(),
        text,
        completed: false
    }

    toDoTasksMap.set(newToDoTask.id, newToDoTask);

    return res.status(201).json(newToDoTask);  
}

const editToDoTask = (req: Request, res: Response): Response<IToDoTask> => {
    const { id, text, completed }: IToDoTask = req.body;

    if (!id) {
        return badRequest(res, 'ToDoTask id is required!');
    }

    const toDoTaskToEdit = toDoTasksMap.get(id);

    if (!toDoTaskToEdit) {
        return notFound(res, `ToDoTask with id: "${id}" not found!`);
    }

    if (text) {
        toDoTaskToEdit.text = text;
    }
    if (completed !== undefined) {
        toDoTaskToEdit.completed = !!completed;
    }

    return res.status(200).json(toDoTaskToEdit);
} 

const deleteToDoTask = (req: Request, res: Response): Response<IToDoTask> => {
    const { id }: IDeleteToDoTaskInfo = req.body;

    if (!id) {
        return badRequest(res, 'ToDoTask id is required!');
    } 

    const toDoTaskToDelete = toDoTasksMap.get(id);

    if (!toDoTaskToDelete) {
        return notFound(res, `ToDoTask with id: "${id}" not found!`);
    }

    toDoTasksMap.delete(id);

    return res.status(200).json([...toDoTasksMap.values()]);
} 

export {
   getToDoTasks,
   addToDoTask,
   editToDoTask,
   deleteToDoTask
}