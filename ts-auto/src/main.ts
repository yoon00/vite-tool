import { loadStorage } from './storage';
import { addTodo, updateTodo, deleteTodo, toggleTodo } from './todo';
import type { Todo, TodoList } from './type';
import S from '/src/style.module.css';

function createTodoList(){
const template = `
  <div class="${S.container}">
    <form>
      <label for="todo">할 일 : </label>
      <input type="text" id="todo" />
      <button type="submit">추가</button>
    </form>
    <hr />
    <ul class="renderPlace">
    </ul>
  </div>
`
return template;
}
  
function renderTodoList(target:Element | null){
  target && target.insertAdjacentHTML('beforeend',createTodoList()) ;
}

const app = document.querySelector("#app");
renderTodoList(app);

const form = document.querySelector('form');
const input = document.querySelector('#todo') as HTMLInputElement;

function handleSubmit(e:SubmitEvent){
  e.preventDefault();
  const value = input.value.trim();
  
  if(!value) return;

  addTodo(value);
  input.value = '';
  render();
}

form?.addEventListener('submit', handleSubmit);

const ul = document.querySelector('.renderPlace') as HTMLUListElement;

function render(){ 
  const todos:TodoList = loadStorage();

  ul.innerHTML = '';
  todos.forEach((todo:Todo)=>{    
    const newLi = document.createElement('li');
    newLi.dataset.id = String(todo.id);
    
    newLi.innerHTML = `
    <input type="checkbox" name="checkbox" ${todo.completed ? 'checked' : ''} />
    <span contenteditable="true">${todo.content}</span>
    <button type="button" class="delete">삭제</button>
    `;
    ul.appendChild(newLi);
    const btn = newLi.querySelector('button')!;
    const checkbox = newLi.querySelector('input[type="checkbox"]')!;
    const span = newLi.querySelector('span')!;

    btn.addEventListener('click', () => {
      deleteTodo(todo.id);
      render();
    })

    checkbox.addEventListener('change', () => {
      toggleTodo(todo.id);
      render();
    })

    span.addEventListener('blur', () => {
      const newContent =span.textContent?.trim() || '';
      if(newContent && newContent !== todo.content){
        updateTodo(todo.id, newContent);
        render();
      }
    })
  })
}

render();