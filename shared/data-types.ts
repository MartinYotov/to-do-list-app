export interface IToDoTask {
    id: string;
    text: string;
    completed: boolean
}

export interface INewToDoTaskInfo {
    text: string;
}

export interface IDeleteToDoTaskInfo {
    id: string;
}