const container = document.createElement("div")
container.classList.add("container")

const img = document.createElement("img")
img.classList.add("img")

const name = document.createElement("p")
const Email = document.createElement("p")

const button = document.createElement("button")
button.classList.add("button")
button.innerHTML = "Click for random user"

container.appendChild(img);
container.appendChild(name)
container.appendChild(Email)
container.appendChild(button)

document.body.appendChild(container)

async function api_call() {
    try {
        const api_response = await fetch("https://randomuser.me/api/");
        const response = await api_response.json();

        const random = response.results[0];

        img.src = random.picture.large;
        img.alt = "Random user"

        name.innerHTML = random.name.first;

        Email.innerHTML = random.email;

    } catch (error) {
        console.log(error.message)
    } finally {
        console.log("Completed")
    }


}

button.addEventListener("click", () => {
    api_call();
})
api_call();

