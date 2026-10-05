const menuContainer = document.getElementById("menu-container");
const pagination = document.getElementById("pagination");

const categoryButtons = document.querySelectorAll(".category-btn")

let allRecipes = [];
let currentRecipes = [];

let currentPage = 1;
let recipesPerPage = 8;

const getRecipePrice = (recipe) => {
    return Number((5.99 + (recipe.id % 10)).toFixed(2));
}

const addToCart = (recipe) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find(item => item.id === recipe.id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: recipe.id,
            name: recipe.name,
            image: recipe.image,
            price: getRecipePrice(recipe),
            quantity: 1
        });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    document.dispatchEvent(new Event("cartUpdated"));
    console.log(cart)
};

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

        const price_add = document.createElement("div")
        price_add.className = "flex justify-between item-center"

        const recipePrice = document.createElement("p")
        recipePrice.innerHTML = "$" + getRecipePrice(recipe);

        const button = document.createElement("button");
        button.innerHTML = "Add";
        button.className = "bg-[#FF6B21] text-white px-4 py-2 rounded-full cursor-pointer";
        button.addEventListener("click", () => {
            addToCart(recipe)
        })

        price_add.appendChild(recipePrice);
        price_add.appendChild(button)

        card.appendChild(img)
        card.appendChild(h3)
        card.appendChild(p1)
        card.appendChild(p2)
        card.appendChild(price_add)

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

