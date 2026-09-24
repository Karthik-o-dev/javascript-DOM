const loginBtn = document.getElementById("login-button");
const login = document.getElementById("login")
loginBtn.addEventListener("click", () => {
    login.style.display = "flex";
})

const signUpBtn = document.getElementById("signUpBtn")
const sign = document.getElementById("signUp")
signUpBtn.addEventListener("click", () => {
    sign.style.display = "flex";
})

const base_url = "https://dummyjson.com"

const get_api = (end_point) => {
    return base_url + end_point;
}

const request = async (url) => {
    try {
        const response = await fetch(url)
        return await response.json()
    } catch {
        return null
    }
}

const getAllRecipes = async () => {
    const api = get_api("/recipes?skip=10&limit=4")
    const response = await request(api)
    return response.recipes;
}

const categories = document.getElementById("categories");

getAllRecipes().then(recipes => {
    recipes.forEach(recipe => {

        const main_img = recipe.image;

        const recipesContainer = document.createElement("div");
        recipesContainer.className = ("recipes_Container")

        const img = document.createElement("img");
        img.src = main_img
        img.alt = recipe.name;
        img.classList.add("image-container")

        const title = document.createElement("h2")
        title.innerHTML = recipe.name;

        recipesContainer.appendChild(img)
        recipesContainer.appendChild(title)

        categories.appendChild(recipesContainer)



    });
})
