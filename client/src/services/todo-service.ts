import { AxiosInstance, AxiosResponse } from "axios";
import { IToDoTask, INewToDoTaskInfo } from "../../../shared/data-types";

export interface IToDoService {
    getToDoTasks(): Promise<AxiosResponse<IToDoTask[]>>;
    addToDoTask(newTaskInfo: INewToDoTaskInfo): Promise<AxiosResponse<IToDoTask>>;
    editToDoText(id: string, text: string): Promise<AxiosResponse<IToDoTask>>;
    editToDoCompleted(id: string, completed: boolean): Promise<AxiosResponse<IToDoTask>>;
    deleteToDoTask(id: string): Promise<AxiosResponse<IToDoTask[]>>;
}

const url: string = 'todo-tasks/';

export default class ToDoService implements IToDoService {
    constructor(private http: AxiosInstance) {}

    getToDoTasks(): Promise<AxiosResponse<IToDoTask[]>> {
        return this.http.get<IToDoTask[]>(url);
    }

    addToDoTask(newTaskInfo: INewToDoTaskInfo): Promise<AxiosResponse<IToDoTask>> {
        return this.http.post<IToDoTask>(url, newTaskInfo);
    }

    editToDoText(id: string, text: string): Promise<AxiosResponse<IToDoTask>> {
        return this.http.patch<IToDoTask>(url + id, {text});
    }

    editToDoCompleted(id: string, completed: boolean): Promise<AxiosResponse<IToDoTask>> {
        return this.http.patch<IToDoTask>(url + id, {completed});
    }

    deleteToDoTask(id: string): Promise<AxiosResponse<IToDoTask[]>> {
        return this.http.delete<IToDoTask[]>(url + id);
    }
}