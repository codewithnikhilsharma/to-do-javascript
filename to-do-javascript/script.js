const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-todo-btn");
const todoList = document.getElementById("todo-list");

// Function to create a new to-do item
function createTodoItem(todoText) {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    const todoTextSpan = document.createElement("span");
    todoTextSpan.innerText = todoText;
    const deleteTodoBtn = document.createElement("button");
    deleteTodoBtn.classList.add("delete-todo-btn");
    deleteTodoBtn.innerText = "Delete";
    deleteTodoBtn.addEventListener("click", function() {
        todoItem.remove();
    });
    todoItem.appendChild(todoTextSpan);
    todoItem.appendChild(deleteTodoBtn);
    todoList.appendChild(todoItem);
}

// Event listener for Add button click
addTodoBtn.addEventListener("click", function() {
    const todoText = todoInput.value;
    if (todoText) {
        createTodoItem(todoText);
        todoInput.value = "";
    }
});

// Event listener for Enter key press in input field
todoInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addTodoBtn.click();
    }
});
