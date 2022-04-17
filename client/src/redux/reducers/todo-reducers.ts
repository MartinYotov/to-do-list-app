import { Action as ReduxAction } from "redux";
import { IToDoTask } from "../../../../shared/data-types";
import { Map } from "immutable";
import { 
    Action, 
    AddToDoTaskAction, 
    DeleteToDoTaskAction, 
    EditCompletedPayload, 
    EditTextPayload, 
    EditToDoTaskCompletedAction, 
    EditToDoTaskTextAction, 
    SetToDoTasksAction 
} from "../actions";


export type ToDoState = {
    toDoTasksList: Map<string, IToDoTask>;
}

const defaultState: ToDoState = {
    toDoTasksList: Map<string, IToDoTask>()
}

export const toDoReducer = (state: ToDoState = defaultState, action: ReduxAction<Action>): ToDoState => {
    switch(action.type) {
        case Action.SetToDoTasks: {
            const toDoTasks: IToDoTask[] = (action as SetToDoTasksAction).payload;            
            const toDoTasksMap: Map<string, IToDoTask> = Map(toDoTasks.map(task => [task.id, task]));

            return { ...state, toDoTasksList: toDoTasksMap }
        } 
        case Action.AddToDoTask: {
            const newTask: IToDoTask = (action as AddToDoTaskAction).payload;  
            const toDoTasksMap: Map<string, IToDoTask> = state.toDoTasksList.set(newTask.id, newTask);

            return { ...state, toDoTasksList: toDoTasksMap }
        }
        case Action.EditToDoTaskText: {
            const { id, text }: EditTextPayload = (action as EditToDoTaskTextAction).payload;  
            const taskToUpdate = state.toDoTasksList.get(id) as IToDoTask;
            const toDoTasksMap: Map<string, IToDoTask> = state.toDoTasksList.set(id, {...taskToUpdate, text});

            return { ...state, toDoTasksList: toDoTasksMap }
        }
        case Action.EditToDoTaskCompleted: {
            const { id, completed }: EditCompletedPayload = (action as EditToDoTaskCompletedAction).payload;  
            const taskToUpdate = state.toDoTasksList.get(id) as IToDoTask;
            const toDoTasksMap: Map<string, IToDoTask> = state.toDoTasksList.set(id, {...taskToUpdate, completed});

            return { ...state, toDoTasksList: toDoTasksMap }
        }
        case Action.DeleteToDoTask: {
            const id: string = (action as DeleteToDoTaskAction).payload;  
            const toDoTasksMap: Map<string, IToDoTask> = state.toDoTasksList.delete(id);

            return { ...state, toDoTasksList: toDoTasksMap }
        }
        default: {
            
            return state
        }
    }
}
