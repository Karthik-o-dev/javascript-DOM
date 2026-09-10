const container = document.createElement("div");
container.classList.add("container")

const users = ["user1", "user2", "user3"];
const getUser = () => {
    return users.shift();
}
let len = users.length;
for (let i = 0; i < len; i++) {
    const child_1 = document.createElement("div")

    child_1.classList.add("child")

    const child_1img = document.createElement("img")
    child_1img.classList.add("img")
    child_1img.src = "./assets/place2.png"
    child_1img.alt = "profile"
    child_1img.width = 50;
    child_1img.height = 50;

    child_1.appendChild(child_1img)

    const innerText = document.createElement("div");
    innerText.classList.add("innerText")

    const innerDiv = document.createElement("div")

    const text_1 = document.createElement("p")
    text_1.innerHTML = getUser()
    innerDiv.appendChild(text_1)

    const time_1 = document.createElement("p")

    function updateTime() {
        let now = new Date();
        time_1.innerHTML = now.toLocaleTimeString();
    }
    updateTime();
    setInterval(updateTime, 1000);

    innerDiv.classList.add("innerDiv")
    innerDiv.appendChild(time_1)


    const innerDiv_2 = document.createElement("div")

    const text_2 = document.createElement("p")
    text_2.innerHTML = "How are you?"
    innerDiv_2.appendChild(text_2)


    innerText.appendChild(innerDiv)
    innerText.appendChild(innerDiv_2)

    child_1.appendChild(innerText)
    // child_1.appendChild(innerDiv_2)
    // child_1.appendChild(innerDiv)
    container.appendChild(child_1)
}

document.body.appendChild(container);