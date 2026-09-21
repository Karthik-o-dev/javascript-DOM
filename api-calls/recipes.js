const cart_item = [];

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

let limit = 10;
let page = 1
let skip = ((page - 1) * limit);

const getAllProduct = async () => {
    page++;
    let skip = ((page - 1) * limit);
    const api = get_api("/products?skip=" + skip + "&limit=" + limit);
    const response = await request(api)
    return response.products;
}

const parent = document.getElementById("parent");
parent.style.display = "flex";

const loading = document.getElementById("loading")
const cartCount = document.getElementById("cart-count")

const handleProductList = () => getAllProduct().then(products => {
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

        const qtyWrapper = document.createElement("div")
        qtyWrapper.classList.add("qty-container")
        qtyWrapper.style.display = "none"

        const qty_span = document.createElement("span")
        qty_span.innerHTML = 1;
        qty_span.classList.add("qty")

        const qtydecre = document.createElement("button")
        qtydecre.innerHTML = "-"
        qtydecre.classList.add("qty-button")

        const qtyincre = document.createElement("button")
        qtyincre.innerHTML = "+";
        qtyincre.classList.add("qty-button")


        button.addEventListener("click", () => {
            const itemIntex = cart_item.findIndex(item => item.id === product.id)
            if (itemIntex == -1) {
                cart_item.push({ ...product, qty: 1 });
                cartCount.innerHTML = cart_item.length;
                qtyWrapper.style.display = "flex"
                button.style.display = "none"
                cartCount.classList.add("bumb");
                setTimeout(() => {
                    cartCount.classList.remove("bumb")
                }, 300);
            } else {
                cart_item[itemIntex].qty += 1;
            }
        })

        const price = document.createElement("div")
        price.classList.add("price-div")

        const ogPrice = document.createElement("div")
        ogPrice.innerHTML = "<b><s>$" + product.price + "</s>$" + disPrice.toFixed(2) + "</b>"

        const rating = document.createElement("div")
        rating.innerHTML = "<span>" + product.rating + "</span>"




        qtydecre.addEventListener("click", () => {
            const itemIntex = cart_item.findIndex(item => item.id === product.id)

            if (itemIntex == -1) return;

            if (cart_item[itemIntex].qty <= 1) {
                qtyWrapper.style.display = "none";
                button.style.display = "block";
                cart_item.splice(itemIntex, 1)
                return;
            }
            cart_item[itemIntex].qty -= 1;
            qty_span.innerHTML = cart_item[itemIntex].qty;

            cartCount.innerHTML = cart_item.reduce(
                (total, item) => total + item.qty,
                0
            );



        })



        qtyincre.addEventListener("click", () => {
            const itemIntex = cart_item.findIndex(item => item.id === product.id)
            if (itemIntex == -1) return
            cart_item[itemIntex].qty += 1;
            qty_span.innerHTML = cart_item[itemIntex].qty;
            cartCount.innerHTML = cart_item.reduce(
                (total, item) => total + item.qty,
                0);
        })

        qtyWrapper.appendChild(qtydecre)
        qtyWrapper.appendChild(qty_span)
        qtyWrapper.appendChild(qtyincre)




        price.appendChild(ogPrice)
        price.appendChild(rating)

        productContainer.appendChild(img);
        productContainer.appendChild(title);
        productContainer.appendChild(price);
        productContainer.appendChild(button);

        productContainer.appendChild(qtyWrapper)

        parent.appendChild(productContainer);
    });
})

handleProductList();

const newPage = document.createElement("p");

newPage.innerHTML = "Load More";
newPage.style.textAlign = "center";
newPage.style.cursor = "pointer";
newPage.addEventListener("click", () => {
    handleProductList();
})

document.body.appendChild(newPage);