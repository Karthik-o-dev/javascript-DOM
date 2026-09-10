const container = document.createElement("div");
container.classList.add("container")

const users = [
    {
        name: "karthik",
        message: "how are you?",
        image: "./assets/place2.png",
        notification: 20
    },
    {
        name: "Rabul",
        message: "how was your time?",
        image: "./assets/place2.png",
        notification: 10
    },
    {
        name: "bijth",
        message: "hai, how are you?",
        image: "./assets/place2.png",
        notification: 15
    },
    {
        name: "karthik",
        message: "how are you?",
        image: "./assets/place2.png",
        notification: 20
    },
    {
        name: "Rabul",
        message: "how was your time?",
        image: "./assets/place2.png",
        notification: 10
    },
    {
        name: "bijth",
        message: "hai, how are you?",
        image: "./assets/place2.png",
        notification: 15
    },
    {
        name: "karthik",
        message: "how are you?",
        image: "./assets/place2.png",
        notification: 20
    },
    {
        name: "Rabul",
        message: "how was your time?",
        image: "./assets/place2.png",
        notification: 10
    },
    {
        name: "bijth",
        message: "hai, how are you?",
        image: "./assets/place2.png",
        notification: 15
    },
    {
        name: "karthik",
        message: "how are you?",
        image: "./assets/place2.png",
        notification: 20
    }];


let len = users.length;

for (let i = 0; i < len; i++) {

    const user = users[i];

    const child_1 = document.createElement("div")

    child_1.classList.add("child")

    const child_1img = document.createElement("img")
    child_1img.classList.add("img")
    child_1img.src = user.image;
    child_1img.alt = "profile"
    child_1img.width = 50;
    child_1img.height = 50;

    child_1.appendChild(child_1img)

    const innerText = document.createElement("div");
    innerText.classList.add("innerText")

    const innerDiv = document.createElement("div")

    const text_1 = document.createElement("p")
    text_1.innerHTML = user.name;
    innerDiv.appendChild(text_1)

    const time_1 = document.createElement("p")

    function updateTime() {
        let now = new Date();
        time_1.innerHTML = now.toLocaleTimeString();
    }
    updateTime();

    innerDiv.classList.add("innerDiv")
    innerDiv.appendChild(time_1)


    const innerDiv_2 = document.createElement("div")

    const text_2 = document.createElement("p")
    text_2.innerHTML = user.message;
    innerDiv_2.classList.add("innerDiv_2")
    innerDiv_2.appendChild(text_2)

    const span = document.createElement("span");
    span.textContent = user.notification;
    innerDiv_2.appendChild(span);



    innerText.appendChild(innerDiv)
    innerText.appendChild(innerDiv_2)

    child_1.appendChild(innerText)
    // child_1.appendChild(innerDiv_2)
    // child_1.appendChild(innerDiv)
    container.appendChild(child_1)
}

document.body.appendChild(container);