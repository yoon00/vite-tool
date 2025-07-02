import { loadStorage, saveStorage } from "./storage";
import type { TodoList } from "./type"

let todos:TodoList = loadStorage();

export function addTodo(content:string):void{
    const newTodo = {
        id:Date.now(),
        content:content,
        completed:false
    }
    todos.push(newTodo);
    saveStorage(todos)
}

export function deleteTodo(id:number):void{
  todos = todos.filter(todo => todo.id !== id);
  saveStorage(todos)
}

export function toggleTodo(id:number):void{      
    todos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
    saveStorage(todos);
}

export function updateTodo(id:number, newContent:string):void{
    todos = todos.map(todo => todo.id === id? {...todo, content:newContent} : todo);
    saveStorage(todos);
}