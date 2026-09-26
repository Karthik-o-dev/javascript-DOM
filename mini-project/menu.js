const menuContainer = document.getElementById("menu-container");
const pagination = document.getElementById("pagination");

const categoryButtons = document.querySelectorAll(".category-btn")

let allRecipes = [];
let currentRecipes = [];

let currentPage = 1;
let recipesPerPage = 8;

const displayRecipes = (recipes) => {
    menuContainer.innerHTML = "";

    const start = (currentPage - 1) * recipesPerPage;
    const end = start + recipesPerPage;
    const pageRecipes = recipes.slice(start, end);

    pageRecipes.forEach(recipe => {
        const card = document.createElement("div");
        card.className = "dishes";

        const img = document.createElement("img");
        img.src = recipe.image;
        img.alt = recipe.name;

        const h3 = document.createElement("h3");
        h3.innerHTML = recipe.name;

        const p1 = document.createElement("p");
        p1.innerHTML = "⭐" + recipe.rating;

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
    createPagination(recipes)
}

const createPagination = (recipes) => {
    pagination.innerHTML = "";

    const totalPage = Math.ceil(recipes.length / recipesPerPage);

    const previousButton = document.createElement("button")
    previousButton.innerHTML = "<";
    previousButton.classList.add("previousButton")

    previousButton.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            displayRecipes(recipes);
        }
    })

    pagination.appendChild(previousButton)

    for (let i = 1; i <= totalPage; i++) {
        const pageButton = document.createElement("button")

        pageButton.innerHTML = i;
        pageButton.classList.add("pageButton")

        if (i === currentPage) {
            pageButton.classList.add("bg-black", "text-white")
        } else {
            pageButton.classList.add("bg-white", "text-black")
        }
        pageButton.addEventListener("click", () => {
            currentPage = i;
            displayRecipes(recipes);
        })
        pagination.appendChild(pageButton)


    }

    const nextButton = document.createElement("button")
    nextButton.innerHTML = ">";
    nextButton.classList.add("previousButton")

    nextButton.addEventListener("click", () => {
        if (currentPage < totalPage) {
            currentPage++;
            displayRecipes(recipes)
        }
    })
    pagination.appendChild(nextButton)


}

const loadRecipes = async () => {
    allRecipes = await getAllRecipes();
    currentRecipes = allRecipes;
    currentPage = 1;
    displayRecipes(currentRecipes);
}
loadRecipes();

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {
            btn.classList.remove("bg-black", "text-white");
            btn.classList.add("bg-white", "text-black");
        });

        button.classList.remove("bg-white", "text-black");
        button.classList.add("bg-black", "text-white");

        const category = button.dataset.category;
        if (category == "all") {
            currentRecipes = allRecipes;
            currentPage = 1;
            displayRecipes(allRecipes);
            return;
        } else {
            currentRecipes = allRecipes.filter(recipe => {
                return getCategory(recipe) === category;
            });
            currentPage = 1;
            displayRecipes(currentRecipes)
        }


    });
});

const getCategory = (recipe) => {

    if (recipe.mealType?.includes("Breakfast")) {
        return "Breakfast";
    }

    if (recipe.mealType?.includes("Lunch")) {
        return "Lunch";
    }

    if (recipe.mealType?.includes("Dinner")) {
        return "Dinner";
    }

    if (recipe.mealType?.includes("Snack")) {
        return "Snack";
    }

    return "Other";
};

