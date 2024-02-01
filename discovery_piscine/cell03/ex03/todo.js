let list = ["Test", "Real"];
const toDoEl = document.getElementById("ft_list");
const addButt = document.getElementById("addButt");

//append child to 
const render = () => {
  toDoEl.innerHTML = "";
  list.forEach((value, index) => {
    const toDoItem = createTodoElement(value);
    toDoItem.addEventListener("click", () => {
      removeTodo(index);
    });
    toDoEl.appendChild(toDoItem);
  });
};

//Create new element adding class todoItem
const createTodoElement = (value) => {
  const button = document.createElement("button");
  button.classList.add("todoItem");
  button.textContent = value;
  return button;
};

//add todo to JSON and render()
const addTodo = (value) => {
  list.push(value);
  updateCookie(JSON.stringify(list));
  console.log(JSON.stringify(list));
  render();
};

//remove todo from JSON and render()
const removeTodo = (index) => {
  list.splice(index, 1);
  updateCookie(JSON.stringify(list));
  console.log(JSON.stringify(list));
  render();
};

//update cookie by using setCookie Build-in function
const updateCookie = (value) => {
  setCookie("toDo", value);
};

// returned cookies that saved
const setCookie = (key, value) => {
  document.cookie = `${key} = ${value};`;
};

//split cookie to list and loop 
const getCookie = (key) => {
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    // trimed the key & '='
    if (cookie.startsWith(key + "=")) return cookie.substring(key.length + 1);
    return null;
  }
};

//onclick addButt show prompt input and adding input by addTodo()
addButt.addEventListener("click", () => {
  const newTodo = prompt("New ToDo");
  if (newTodo.trim().length <= 0) return;
  addTodo(newTodo);
});

//get all oldTodo in cookies and write th JSON
const oldToDo = getCookie("toDo");
if (oldToDo) {
  list = JSON.parse(oldToDo);
}

render();
