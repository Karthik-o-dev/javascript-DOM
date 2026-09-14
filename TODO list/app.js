let todoArray = [];

const uuid = () => {
    const str = "abcdef0123456789";
    const arr = [];

    while (arr.length < 16) {
        const ridx = Math.floor(Math.random() * str.length);
        const rltr = str[ridx];
        arr.push(rltr);
    }

    return arr.join("");
};

const getTodo = () => {
    return todoArray;
};

const createTodo = (todo) => {
    const dateTime = new Date().toLocaleString();

    const todoObj = {
        id: uuid(),
        title: todo,
        createdAt: dateTime,       // fixed
        updatedAt: dateTime,       // fixed
        status: "Pending"
    };

    todoArray.unshift(todoObj);

    return todoObj;
};

const handleRemoveTask = (id) => {
    todoArray = todoArray.filter((todo) => todo.id != id);
    console.log(todoArray);
};

const toggleStatus = (id) => {
    const updated = todoArray.map((todo) => {
        if (todo.id == id) {
            todo.status =
                todo.status == "Pending"
                    ? "Completed"
                    : "Pending";
        }

        return todo;
    });
};


// ADDED
const handleUpdateTask = (todo) => {
    const input = document.getElementById("edit_input");

    todo.title = input.value;
    todo.updatedAt = new Date().toLocaleString();

    console.log(todo);
};


const form = document.getElementById("form");
const error = document.getElementById("error");
const todoList = document.getElementById("list");

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

    error.innerHTML = "";
});


const updateList = (todo) => {

    const li = document.createElement("li");

    li.innerHTML =
        "<div><b>Task:</b> <input type='text' id='edit_input' value=" +
        todo.title +
        " /></div>" +

        "<div><b>Status:</b> " +
        todo.status +
        "</div>" +

        "<div><b>Time:</b> " +
        todo.createdAt +       // fixed
        "</div>" +

        "<br><button class='update-btn' id='update_btn'>Update</button>";

    li.classList.add("todo_items");


    const button = document.createElement("button");

    button.innerHTML = "Delete";
    button.classList.add("del-btn");

    button.addEventListener("click", () => {
        li.remove();
        handleRemoveTask(todo.id);
    });


    const editButton = document.createElement("button");

    editButton.innerHTML = "Edit";
    editButton.classList.add("ed-btn");

    editButton.addEventListener("click", () => {

        li.innerHTML =
            "<div><b>Task:</b> <input type='text' id='edit_input' value=" +
            todo.title +
            " /></div>" +

            "<div><b>Status:</b> " +
            todo.status +
            "</div>" +

            "<div><b>Time:</b> " +
            todo.createdAt +       // fixed
            "</div>" +

            "<br><button class='update-btn' id='update_btn'>Update</button>";

        const updateButton =
            document.getElementById("update_btn");

        updateButton.addEventListener("click", () => {
            handleUpdateTask(todo);
        });
    });


    const statusButton = document.createElement("button");

    statusButton.innerHTML = "Completed";
    statusButton.classList.add("st-btn");

    statusButton.addEventListener("click", () => {
        toggleStatus(todo.id);
    });


    const btncontainer = document.createElement("div");

    btncontainer.appendChild(button);
    btncontainer.appendChild(editButton);
    btncontainer.appendChild(statusButton);

    btncontainer.classList.add("btn-container");

    li.appendChild(btncontainer);

    todoList.appendChild(li);
};


form.addEventListener("submit", (event) => {

    event.preventDefault();

    const todoInput = document.getElementById("todoForm");
    const todo = todoInput.value;

    if (!todo) {
        error.innerHTML = "Please enter the task...";
        return;
    }

    if (todo.length < 10) {
        error.innerHTML =
            "Task should be at least 10 characters long.";
        return;
    }

    const newTask = createTodo(todo);

    updateList(newTask);

    document.getElementById("todoForm").value = "";
});