import { Action as ReduxAction } from "redux";
import { Action, FilterOption, UpdateFilterAction } from "../actions";

export type FilterState = {
    filterOption: FilterOption;
}

const defaultState: FilterState = {
    filterOption: FilterOption.All
}

export const filterReducer = (state: FilterState = defaultState, action: ReduxAction<Action>): FilterState => {
    switch(action.type) {
        case Action.UpdateFilter: {
            const filterOption: FilterOption = (action as UpdateFilterAction).payload;

            return { ...state, filterOption };
        }     
        default: {            
            return state
        }
    }
}