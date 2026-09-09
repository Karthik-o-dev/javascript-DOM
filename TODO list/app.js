const form = document.getElementById("form");
const error = document.getElementById("error")
const todoList = document.getElementById("list")

form.addEventListener("input", () => {
    const todoInput = document.getElementById("todoForm");
    const todo = todoInput.value;
    if (!todo) {
        error.innerHTML = "Please enter the task...";
        return;
    }

    if (todo.length < 10) {
        error.innerHTML = "Task should be at least 10 characters long.";
        return;
    }

    error.innerHTML = ""
})

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const todoInput = document.getElementById("todoForm");
    const todo = todoInput.value;

    if (!todo) {
        error.innerHTML = "Please enter the task...";
        return;
    }

    if (todo.length < 10) {
        error.innerHTML = "Task should be at least 10 characters long.";
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = todo;

    const div = document.createElement("div")

    const button = document.createElement("button");
    button.innerHTML = "Delete";
    button.classList.add("btn");
    button.addEventListener("click", () => {
        li.remove();
    })
    const edit = document.createElement("button");
    edit.innerHTML = "Edit";
    edit.classList.add("edit");
    edit.addEventListener("click", () => {
        return alert('This option not Available');
    })
    div.appendChild(button)
    div.appendChild(edit)

    li.appendChild(div)

    todoList.appendChild(li);

    document.getElementById("todoForm").value = "";

})

