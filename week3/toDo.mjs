let todos = [];
let outputEl = {};
let localStorageKey = "todos";

function saveTodos(todos) {
  localStorage.setItem(localStorageKey, JSON.stringify(todos));
}

function getTodos() {
  todos = JSON.parse(localStorage.getItem(localStorageKey)) || [];
}

export function addTodo(todo) {
  const todoText = document.querySelector("#toDoText");
  const newTodo = {
    value: todoText.value,
    completed: false
  };
  todos.push(newTodo);
  saveTodos(todos);
  displayTodos(todos);
  todoText.value = "";
}

function todoSetupTemplate() {
  return `<section>
    <input type="text" id="toDoText" placeholder="new todo" />
    <button id="addButton">Add</button>
  </section>
  <ul id="todoList"></ul>`;
}

function todoTemplate(todo) {
  // todo: the id on the checkbox will need to be unique for each todo listed.
  return `<li><label for="completeCheck"><input id="completeCheck" type="checkbox" ${
    todo.completed ? "checked" : ""
  }> ${todo.value}</label><span>🗑️</span></li>`;
}

function displayTodos(todoList) {
  const listEl = document.querySelector("#todoList");
  listEl.innerHTML = "";
  const html = todoList.map(todoTemplate);
  listEl.insertAdjacentHTML("afterbegin", html.join(""));
}

function handleTodoClick(e) {
  // we need to figure out which todo was clicked on...and whether the complete box or delete button was clicked
  console.dir(e.target);
  console.dir(e.currentTarget);
}

export default function toDo(selector, key) {
  outputEl = document.querySelector(selector);
  // if a key was passed in set it locally, otherwise use the default value ("todos")
  if (key) localStorageKey = key;
  outputEl.insertAdjacentHTML("afterBegin", todoSetupTemplate());
  // add listener to button now that it exists
  document.querySelector("#addButton").addEventListener("click", addTodo);
  // add listener to the list as well now that it exists...to watch for clicks on todos
  document
    .querySelector("#todoList")
    .addEventListener("click", handleTodoClick);
  getTodos();
  displayTodos(todos);
}
