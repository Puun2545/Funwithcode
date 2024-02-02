let list = [];
const toDoEl = $("#ft_list");
const addButt = $("#addButt");

// Append child to 
const render = () => {
    toDoEl.empty();
    list.forEach((value, index) => {
        const toDoItem = createTodoElement(value);
        toDoItem.click(() => {
            var answer = confirm("Delete?");
            if (answer) {
                removeTodo(index);
            } else {
                return;
            }
        });
        toDoEl.append(toDoItem);
    });
};

// Create new element adding class todoItem
const createTodoElement = (value) => {
    const button = $("<button>").addClass("todoItem").text(value);
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
addButt.click(() => {
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