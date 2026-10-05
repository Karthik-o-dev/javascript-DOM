const cartButton = document.getElementById("cart-button");
const cartOverlay = document.getElementById("cart-overlay");
const cartDrawer = document.getElementById("cart-drawer");
const cartClose = document.getElementById("close-cart");

const openCart = () => {
    cartDrawer.classList.add("open");
    cartOverlay.classList.add("open");
    document.body.classList.add("cart-open")
}

const hideCart = () => {
    cartDrawer.classList.remove("open");
    cartOverlay.classList.remove("open");
    document.body.classList.remove("cart-open")
}

cartButton.addEventListener("click", openCart);
cartClose.addEventListener("click", hideCart);
cartOverlay.addEventListener("click", hideCart);


const drawerCartItems = document.getElementById("drawer-cart-items");
const cartCount = document.getElementById("cart-count");

const getCart = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
};

const displayCart = () => {
    const cart = getCart();

    drawerCartItems.innerHTML = "";

    if (cart.length === 0) {
        drawerCartItems.innerHTML = "Your basket is empty";
        cartCount.textContent = "0";
        return;
    }

    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.className = "flex gap-3 items-center mb-5  border p-2 rounded-xl";

        const img = document.createElement("img");

        img.src = item.image;
        img.alt = item.name;

        img.className =
            "w-20 h-20 object-cover rounded-xl";

        const itemInfo = document.createElement("div");
        itemInfo.className = "flex-1"

        const name = document.createElement("h3");

        name.textContent = item.name;
        name.className = "font-semibold";

        const price = document.createElement("p");

        price.textContent =
            "$" + Number(item.price).toFixed(2);

        price.className =
            "text-sm text-gray-500";

        const quantityContainer =
            document.createElement("div");

        quantityContainer.className =
            "flex items-center gap-3 mt-2";

        const decreaseButton =
            document.createElement("button");

        decreaseButton.textContent = "−";
        decreaseButton.className = "quantity-btn";

        decreaseButton.dataset.id = item.id;
        decreaseButton.dataset.action = "decrease";

        const quantity =
            document.createElement("span");

        quantity.textContent = item.quantity;

        const increaseButton =
            document.createElement("button");

        increaseButton.textContent = "+";
        increaseButton.className = "quantity-btn";

        increaseButton.dataset.id = item.id;
        increaseButton.dataset.action = "increase";

        quantityContainer.appendChild(decreaseButton);
        quantityContainer.appendChild(quantity);
        quantityContainer.appendChild(increaseButton);

        const removeButton =
            document.createElement("button");

        removeButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

        removeButton.className =
            "remove-btn text-red-500 text-xs mt-2";

        removeButton.dataset.id = item.id;

        itemInfo.appendChild(name);
        itemInfo.appendChild(price);
        itemInfo.appendChild(quantityContainer);
        itemInfo.appendChild(removeButton);

        const itemTotal =
            document.createElement("p");

        itemTotal.textContent =
            "$" + (item.price * item.quantity).toFixed(2);

        itemTotal.className = "font-semibold";

        cartItem.appendChild(img);
        cartItem.appendChild(itemInfo);
        cartItem.appendChild(itemTotal);

        drawerCartItems.appendChild(cartItem)

    });

};

cartButton.addEventListener("click", displayCart);

drawerCartItems.addEventListener("click", (event) => {
    const cart = getCart();

    const quantityButton = event.target.closest(".quantity-btn")

    if (quantityButton) {

        const id = Number(quantityButton.dataset.id);
        const action = quantityButton.dataset.action;

        const item = cart.find(item => item.id === id);

        if (!item) return;

        if (action === "increase") {
            item.quantity++;
        }

        if (action === "decrease") {
            item.quantity--;

            if (item.quantity <= 0) {
                const filteredCart = cart.filter(item => item.id !== id);

                localStorage.setItem("cart", JSON.stringify(filteredCart));
                displayCart();
                updatedCart();

                return;
            }
        }

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

        displayCart();
        updatedCart();

        return;
    }
    const removeButton = event.target.closest(".remove-btn");

    if (removeButton) {
        const id = Number(removeButton.dataset.id);

        const filteredCart = cart.filter(item => item.id !== id);

        localStorage.setItem("cart", JSON.stringify(filteredCart));

        displayCart();
        updatedCart();
    }

});

const updatedCart = () => {
    const cart = getCart();

    const totalQuantity = cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    cartCount.textContent = totalQuantity;
}

document.addEventListener("cartUpdated", updatedCart);
updatedCart();