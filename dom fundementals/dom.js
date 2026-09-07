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

const dateTime = new Date();

console.log(dateTime.getMonth() + 1);
console.log(dateTime.getDay());
console.log(dateTime.getDate());
console.log(dateTime.getFullYear());

const selectTag = document.createElement("select");

for (let y = 1901; y <= dateTime.getFullYear(); y++) {
    const optionTag = document.createElement("option");
    optionTag.innerText = y;
    optionTag.value = y;
    selectTag.appendChild(optionTag);
}
document.body.appendChild(selectTag)

