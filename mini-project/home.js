const base_api = "https://dummyjson.com";

const get_api = (end_point) => {
    return base_api + end_point;
}

const request = async (url) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch {
        return null;
    }
}

const getAllRecipes = async () => {
    const api = get_api("/recipes?skip=&limit=4")
    const response = await request(api)
    return response.recipes;
}

const popular = document.getElementById("popular-dishes");

getAllRecipes().then(recipes => {
    console.log(recipes);
    recipes.forEach(recipe => {

        const main_img = recipe.image;

        const recipesContainer = document.createElement("div");
        recipesContainer.className = ("dishes")

        const img = document.createElement("img");
        img.src = main_img
        img.alt = recipe.name;
        img.classList.add("image-container")

        const title = document.createElement("h2")
        title.innerHTML = recipe.name;

        recipesContainer.appendChild(img)
        recipesContainer.appendChild(title)

        popular.appendChild(recipesContainer)



    });
})

