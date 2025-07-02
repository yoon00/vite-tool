import { StorageKey, type Todo, type TodoList } from "./type";

export function saveStorage(todos:TodoList):void{
    localStorage.setItem(StorageKey.TODOS, JSON.stringify(todos));
}

export function loadStorage():TodoList{
    const data = localStorage.getItem(StorageKey.TODOS);
    return data ? JSON.parse(data) : []
}