const inputBox = document.getElementById("input");
const addTask = document.getElementById("btn");
const list = document.getElementById("ul");

let todos = [];

// Add Task
function addToDo() {
    const task = inputBox.value.trim();

    if (task === "") {
        return;
    }

    todos.push(task);
    renderTodo();
    inputBox.value = "";
}

// Create Single Todo
function createTodo(item, index) {
    const li = document.createElement("li");
    li.style.listStyle = "none";
    li.style.margin = "10px 0";

    const span = document.createElement("span");
    span.innerText = item;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.addEventListener("click", () => {
        deleteItem(index);
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    return li;
}

// Delete Task
function deleteItem(index) {
    todos.splice(index, 1);
    renderTodo();
}

// Render All Todos
function renderTodo() {
    list.innerHTML = ""; // Clear previous list

    todos.forEach((item, index) => {
        const li = createTodo(item, index);
        list.appendChild(li);
    });
}

// Button Click
addTask.addEventListener("click", addToDo);

// Press Enter to Add Task
inputBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addToDo();
    }
});