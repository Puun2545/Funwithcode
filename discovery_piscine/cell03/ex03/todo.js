let list = [];
const toDoEl = document.getElementById("ft_list");
const addButt = document.getElementById("addButt");

// Append child to 
const render = () => {
  toDoEl.innerHTML = "";
  list.forEach((value, index) => {
    const toDoItem = createTodoElement(value);
    toDoItem.addEventListener("click", () => {
      var answer = confirm("Delete?");
      if (answer) {
        removeTodo(index);
      } else {
        return;
      }
    });
    toDoEl.appendChild(toDoItem);
  });
};

// Create new element adding class todoItem
const createTodoElement = (value) => {
  const button = document.createElement("button");
  button.classList.add("todoItem");
  button.textContent = value;
  return button;
};

// Add todo to list and render()
const addTodo = (value) => {
  list.push(value);
  updateCookie(JSON.stringify(list));
  render();
};

// Remove todo from list and render()
const removeTodo = (index) => {
  list.splice(index, 1);
  updateCookie(JSON.stringify(list));
  render();
};

// Update cookie
const updateCookie = (value) => {
  setCookie("toDo", encodeURIComponent(value));
};

// Set cookie
const setCookie = (key, value) => {
  document.cookie = `${key}=${value};`;
};

// Get cookie
const getCookie = (key) => {
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(`${key}=`)) return decodeURIComponent(cookie.substring(key.length + 1));
  }
  return null;
};

// Add event listener to add button
addButt.addEventListener("click", () => {
  const newTodo = prompt("New ToDo");
  if (!newTodo || newTodo.trim().length <= 0) return;
  addTodo(newTodo.trim());
});

// Get old todos from cookies and render
const oldToDo = getCookie("toDo");
if (oldToDo) {
  list = JSON.parse(oldToDo);
}

render();
