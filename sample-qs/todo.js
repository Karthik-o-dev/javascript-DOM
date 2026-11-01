const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const errorMessage = document.getElementById("error-message");
const pendingList = document.getElementById("pending-list");
const completedList = document.getElementById("completed-list")

let tasks = JSON.parse(localStorage.getItem("todos")) || [];
console.log(tasks)

const saveTask = () => {
    localStorage.setItem("todos", JSON.stringify(tasks));
}

const createTask = (task) => {
    const todoCard = document.createElement("div");
    todoCard.className = "flex flex-col gap-3 border p-4 rounded-md bg-white shadow-sm"

    const p = document.createElement("p");
    p.textContent = task.text;
    todoCard.appendChild(p)

    const buttonDiv = document.createElement("div");
    buttonDiv.className = "flex gap-2 w-full"

    const completedBtn = document.createElement("button");
    completedBtn.className = "bg-green-500 rounded-md p-2 w-full"
    completedBtn.textContent = "Completed";
    buttonDiv.appendChild(completedBtn)

    const editBtn = document.createElement("button");
    editBtn.className = "bg-yellow-500 rounded-md p-2 w-full"
    editBtn.textContent = "Edit";
    buttonDiv.appendChild(editBtn)

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "bg-red-500 rounded-md p-2 w-full"
    deleteBtn.textContent = "Delete";
    buttonDiv.appendChild(deleteBtn)

    todoCard.appendChild(buttonDiv);

    if (task.completed) {
        completedList.appendChild(todoCard);
        completedBtn.remove();
        editBtn.remove();

    } else {
        pendingList.appendChild(todoCard);
    }

    completedBtn.addEventListener("click", () => {

        task.completed = true;
        completedBtn.remove();
        editBtn.remove();
        completedList.appendChild(todoCard)
        saveTask();
    });

    let isEditing = false;
    let editInput;
    editBtn.addEventListener("click", () => {


        if (!isEditing) {
            editInput = document.createElement("input");
            editInput.type = "text";
            editInput.value = p.textContent;
            editInput.className = "border rounded-md p-2 w-full";

            p.replaceWith(editInput);
            editBtn.textContent = "Save";

            isEditing = true;
        } else {
            const updatedTask = editInput.value.trim();

            if (updatedTask === "") {
                editInput.focus();
                return;
            }

            task.text = updatedTask;
            p.textContent = updatedTask;
            editInput.replaceWith(p);
            editBtn.textContent = "Edit";

            isEditing = false;
            saveTask();
        }
    })

    deleteBtn.addEventListener("click", () => {
        tasks = tasks.filter(item => item.id !== task.id);
        todoCard.remove();
        saveTask();
    })
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const todo = todoInput.value.trim();

    if (todo === "") {
        errorMessage.textContent = "please enter the task";
        return;
    }

    errorMessage.textContent = "";

    const task = {
        id: Date.now(),
        text: todo,
        completed: false
    };

    tasks.push(task);
    createTask(task);
    saveTask();

    todoInput.value = "";


})
tasks.forEach((task) => {
    createTask(task);
});