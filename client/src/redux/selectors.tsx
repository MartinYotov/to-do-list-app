import { IToDoTask } from "../../../shared/data-types"
import { FilterOption } from "./actions";
import { AppState } from "./reducers"

const getToDoTasks = (state: AppState): IToDoTask[] => {
    return Array.from(state.toDos.toDoTasksList.values());
}

export const getToDoTasksByFilter = (state: AppState): IToDoTask[] => {
    const toDoTasks: IToDoTask[] = getToDoTasks(state);

    switch (state.filter.filterOption) {
        case FilterOption.All: return toDoTasks;
        case FilterOption.Completed: return toDoTasks.filter((task: IToDoTask) => task.completed);
        case FilterOption.NotCompleted: return toDoTasks.filter((task: IToDoTask) => !task.completed);
    }
}

export const getDoneCount = (state: AppState): number => {
    return getToDoTasks(state).reduce((count: number, toDo: IToDoTask) => {
        return count + (toDo.completed ? 1 : 0)
    }, 0);
}