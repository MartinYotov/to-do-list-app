import { Action as ReduxAction } from "redux";
import { IToDoTask } from "../../../shared/data-types";
import { Action, SetToDoTasksAction } from "./actions";

export type ToDoAppState = {
    toDoTasksList: Map<string, IToDoTask>;
}

export const defaultState: ToDoAppState = {
    toDoTasksList: new Map<string, IToDoTask>()
}

export const toDoReducer = (state: ToDoAppState = defaultState, action: ReduxAction<Action>): ToDoAppState => {
    switch(action.type) {
        case Action.SetToDoTasks: {
            const toDoTasks: IToDoTask[] = (action as SetToDoTasksAction).payload;            
            const toDoTasksMap: Map<string, IToDoTask> = new Map(toDoTasks.map(task => [task.id, task]));

            return { ...state, toDoTasksList: toDoTasksMap}
        } 
        default: {
            
            return state
        }
    }
}
