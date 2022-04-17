import { combineReducers } from "redux";
import { filterReducer, FilterState } from "./filter-reducer";
import { toDoReducer, ToDoState } from "./todo-reducers";

export type AppState = {
    toDos: ToDoState,
    filter: FilterState
}

export default combineReducers({ toDos: toDoReducer, filter: filterReducer });