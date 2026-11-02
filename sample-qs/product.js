const productContainer = document.getElementById("product-container");
const cartCount = document.getElementById("cart-count");

const api = "https://dummyjson.com/products";

let cart = [];

const getProduct = async () => {
    try {
        const response = await fetch(api);
        const data = await response.json();
        console.log(data)
        return data.products;
    } catch (error) {
        console.log(error)
        return [];
    }
}

const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: 1
        });
    }

    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);

    console.log("cart items:", cart);
}

const displayProduct = async () => {
    const products = await getProduct();

    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.className = "flex flex-col gap-2 p-5 rounded-md shadow-lg hover:scale-102 transition-transform duration-300";

        const productImg = document.createElement("img");
        productImg.src = product.images[0];
        productImg.alt = product.title;
        productImg.className = "w-full h-48 object-contain"

        const title = document.createElement("h2");
        title.textContent = product.title;

        const price = document.createElement("p");
        price.textContent = "$" + product.price;

        const addBtn = document.createElement("button");
        addBtn.textContent = "Add to cart";
        addBtn.className = "bg-green-500 p-2 text-white rounded-md hover:scale-102 cursor-pointer hover:bg-green-600 transition-colors"
        addBtn.addEventListener("click", () => {
            addToCart(product);
            cartCount.textContent = cart.length;
        })

        productCard.append(productImg, title, price, addBtn)

        productContainer.appendChild(productCard);
    })
}

displayProduct();

