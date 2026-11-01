const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const errorMessage = document.getElementById("error-message");
const todoList = document.getElementById("todo-list");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const todo = todoInput.value.trim();

    if (todo === "") {
        errorMessage.textContent = "please enter the task";
        return;
    }

    const li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
    todoInput.value = "";
})