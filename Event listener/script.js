const body = document.body;
const btn = document.createElement("button");

btn.id = "button";
btn.innerText = "Click Me";
btn.style.padding = "40px";

body.appendChild(btn);

btn.addEventListener("click", function () {
    console.log("button clicked")
})

btn.addEventListener("click", function (event) {
    console.log(event.target)
})

body.addEventListener("keydown", function (event) {
    if (event.shiftKey && event.altKey && event.code == "Enter") {
        console.log("Key down")
    }
})

body.addEventListener("keyup", function (event) {
    if (event.shiftKey && event.altKey && event.code == "Enter") {
        console.log("key up")
    }
})

body.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        console.log("key up")
    }
})

btn.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    console.log(event);
    console.log("contextMenu ")
})

// btn.addEventListener("mouseover", function (event) {
//     console.log("mouse over")
//     console.log(event);
// })

// btn.addEventListener("mousemove", function (event) {
//     console.log("mouse moving")
// })

// btn.addEventListener("mouseenter", function (event) {
//     console.log("mouse enter")
// })

btn.addEventListener("mousedown", function (event) {
    console.log("mouse dowm")
})

const loginForm = document.getElementById("login");
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // const username = document.login.username.value;
    // const password = document.login.password.value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log(username, password);
})

const un = document.getElementById("username");
const count = document.getElementById("count");
un.addEventListener("input", function (event) {
    // console.log(event.target.value)
    const len = event.target.value.length;
    if (len < 5) {
        count.innerText = "min 5 char"
    } else {
        count.innerText = ""
    }
})


const mouseFollow = document.createElement("div");
const ms = mouseFollow.style;
mouseFollow.id = "mf";
ms.height = "40px";
ms.width = "40px";
ms.backgroundColor = "red";
ms.position = "absolute";
ms.top = "0"
ms.left = "0"
ms.transition = "0.05s";
document.body.appendChild(mouseFollow)

document.addEventListener("mousemove", function (event) {
    ms.top = event.clientY + "px";
    ms.left = event.clientX + "px";
});
