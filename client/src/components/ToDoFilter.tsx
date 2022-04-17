import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { createUpdateFilterAction } from "../redux/actions";

const ToDoFilter = () => {
    const dispatch = useDispatch();

    const OnFilterChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        dispatch(createUpdateFilterAction(Number(e.target.value)))
    }

    return (
        <div id="filter">
            <span>Show:</span>
            <select onChange={OnFilterChange}>
                <option value="0">All</option>
                <option value="1">Completed</option>
                <option value="2">Not Completed</option>
            </select>
        </div>
    )
}

export default ToDoFilter;