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

// Read cart data from localStorage
const getCart = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
};

// Display cart items inside the drawer
const displayCart = () => {
    const cart = getCart();

    drawerCartItems.innerHTML = "";

    if (cart.length === 0) {
        drawerCartItems.innerHTML = `
            <p class="text-gray-500">Your basket is empty.</p>
        `;
        cartCount.textContent = "0";
        return;
    }

    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.className = "flex gap-3 items-center mb-5";

        cartItem.innerHTML = `
            <img
                src="${item.image}"
                alt="${item.name}"
                class="w-20 h-20 object-cover rounded-xl"
            >

            <div class="flex-1">
                <h3 class="font-semibold">${item.name}</h3>

                <p class="text-sm text-gray-500">
                    $${Number(item.price).toFixed(2)}
                </p>

                <p class="text-sm mt-1">
                    Quantity: ${item.quantity}
                </p>
            </div>

            <p class="font-semibold">
                $${(item.price * item.quantity).toFixed(2)}
            </p>
        `;

        drawerCartItems.appendChild(cartItem);
    });

    // Calculate total number of food items
    const totalQuantity = cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    cartCount.textContent = totalQuantity;
};

// Display items whenever the cart button is clicked
cartButton.addEventListener("click", displayCart);