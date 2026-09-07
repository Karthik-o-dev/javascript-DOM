const app = document.getElementById("app");
const heading = document.createElement("h1");

heading.textContent = "Hello World"

heading.style.color = "grey";
heading.style.fontSize = "40px"

app.appendChild(heading);

// const body = document.body;
// const button = document.createElement("button");

// button.textContent = "Dark mode";
// body.appendChild(button);

const addDark = () => {
    document.body.classList.add("dark")
}

const removeDark = () => {
    document.body.classList.remove("dark")
}
// console.log(document.body.classList.contains("body"))
const toggleButton = () => {
    document.body.classList.toggle("dark");
}