const menuContainer = document.getElementById("menu-container");

let allRecipes = [];

const displayRecipes = (recipes) => {
    menuContainer.innerHTML = "";
    recipes.forEach(recipe => {
        const card = document.createElement("div");
        card.className = "dishes";

        const img = document.createElement("img");
        img.src = recipe.image;
        img.alt = recipe.name;

        const h3 = document.createElement("h3");
        h3.innerHTML = recipe.name;

        const p1 = document.createElement("p");
        p1.innerHTML = "⭐" + recipes.rating;

        const p2 = document.createElement("p");
        p2.innerHTML = recipe.cuisine;

        const button = document.createElement("button");
        button.innerHTML = "Add";

        card.appendChild(img)
        card.appendChild(h3)
        card.appendChild(p1)
        card.appendChild(p2)
        card.appendChild(button)

        menuContainer.appendChild(card);


    })
}