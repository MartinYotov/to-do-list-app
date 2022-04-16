import { Action as ReduxAction } from "redux";
import { IToDoTask } from "../../../shared/data-types";

export enum Action {
    SetToDoTasks,
    AddToDoTask,
    EditToDoTaskText,
    CompleteToDoTask,
    UncompleteToDoTask
}

export type SetToDoTasksAction = ReduxAction<Action.SetToDoTasks> & { payload: IToDoTask[] }

export const createSetToDoTasksAction = (toDoTasks: IToDoTask[]): SetToDoTasksAction => {
    return { type: Action.SetToDoTasks, payload: toDoTasks }
}