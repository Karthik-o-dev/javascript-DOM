const base_url = "https://dummyjson.com"

const get_api = (end_point) => {
    return base_url + end_point;
}

const request = async (url) => {
    try {
        const response = await fetch(url)
        console.log(response)
        return await response.json()
    } catch (err) {
        return null
    }
}

const getAllProduct = async () => {
    const api = get_api("/products?skip=85")
    const response = await request(api)
    return response.products;
}

const parent = document.getElementById("parent");
parent.style.display = "flex";

const loading = document.getElementById("loading")

getAllProduct().then(products => {
    loading.style.display = "none";
    parent.style.display = "grid"
    products.forEach(product => {

        const disPrice = product.price * (1 - product.discountPercentage / 100);
        const image = product.images;

        const main_img = image[0];

        const productContainer = document.createElement("div")
        productContainer.className = ("product_container")

        const img = document.createElement("img");
        img.src = main_img;
        img.alt = product.title;

        const title = document.createElement("h2")
        title.innerHTML = product.title.length > 15 ? product.title.slice(0, 15) + "..." : product.title;

        const button = document.createElement("button")
        button.innerHTML = "Add to cart";
        button.classList.add("button")

        button.addEventListener("mouseover", () => {
            img.src = image[1] ? image[1] : main_img
        })

        button.addEventListener("mouseleave", () => {
            img.src = main_img
        })

        const price = document.createElement("div")
        price.classList.add("price-div")

        const ogPrice = document.createElement("div")
        ogPrice.innerHTML = "<b><s>$" + product.price + "</s>$" + disPrice.toFixed(2) + "</b>"

        const rating = document.createElement("div")
        rating.innerHTML = "<span>" + product.rating + "</span>"


        price.appendChild(ogPrice)
        price.appendChild(rating)

        productContainer.appendChild(img);
        productContainer.appendChild(title);
        productContainer.appendChild(price);
        productContainer.appendChild(button);

        parent.appendChild(productContainer)
    });
})