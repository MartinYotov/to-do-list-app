import { Action as ReduxAction } from "redux";
import { IToDoTask } from "../../../shared/data-types";

export enum Action {
    SetToDoTasks,
    AddToDoTask,    
    EditToDoTaskText,
    EditToDoTaskCompleted,
    DeleteToDoTask,
    UpdateFilter
}

export type SetToDoTasksAction = ReduxAction<Action.SetToDoTasks> & { payload: IToDoTask[] }

export const createSetToDoTasksAction = (toDoTasks: IToDoTask[]): SetToDoTasksAction => {
    return { type: Action.SetToDoTasks, payload: toDoTasks }
}


export type AddToDoTaskAction = ReduxAction<Action.AddToDoTask> & { payload: IToDoTask }

export const createAddToDoTaskAction = (toDoTask: IToDoTask): AddToDoTaskAction => {
    return { type: Action.AddToDoTask, payload: toDoTask }
}

export type EditTextPayload = { id: string, text: string }
export type EditToDoTaskTextAction = ReduxAction<Action.EditToDoTaskText> & { payload: EditTextPayload }

export const createEditToDoTaskTextAction = (id: string, text: string): EditToDoTaskTextAction => {
    return { type: Action.EditToDoTaskText, payload: { id, text } }
}


export type EditCompletedPayload = { id: string, completed: boolean }
export type EditToDoTaskCompletedAction = ReduxAction<Action.EditToDoTaskCompleted> & { payload: EditCompletedPayload }

export const createEditToDoTaskCompletedAction = (id: string, completed: boolean): EditToDoTaskCompletedAction => {
    return { type: Action.EditToDoTaskCompleted, payload: { id, completed } }
}


export type DeleteToDoTaskAction = ReduxAction<Action.DeleteToDoTask> & { payload: string }

export const createDeleteToDoTaskAction = (id: string): DeleteToDoTaskAction => {
    return { type: Action.DeleteToDoTask, payload: id }
}


export enum FilterOption { All, Completed, NotCompleted }
export type UpdateFilterAction = ReduxAction<Action.UpdateFilter> & { payload: FilterOption }

export const createUpdateFilterAction = (filterOption: FilterOption): UpdateFilterAction => {
    return { type: Action.UpdateFilter, payload: filterOption }
}