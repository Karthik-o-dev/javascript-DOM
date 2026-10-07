const checkoutItems = document.getElementById("checkout-items");
const checkoutSubtotal = document.getElementById("checkout-subtotal");
const checkoutDelivery = document.getElementById("checkout-delivery");
const checkoutTotal = document.getElementById("checkout-total");

const customerName = document.getElementById("customer-name");
const customerPhone = document.getElementById("customer-phone");
const customerAddress = document.getElementById("customer-address");
const placeOrderButton = document.getElementById("place-order");

const getCart = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
};

const displayCheckout = () => {
    const cart = getCart();
    checkoutItems.innerHTML = "";

    if (cart.length === 0) {
        checkoutItems.textContent = "Your cart is empty.";
        checkoutSubtotal.textContent = "$0.00";
        checkoutDelivery.textContent = "$0.00";
        checkoutTotal.textContent = "$0.00";

        return;
    }
    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.className = "flex items-center gap-3 mb-4";

        const image = document.createElement("img");

        image.src = item.image;
        image.alt = item.name;

        image.className = "w-16 h-16 object-cover rounded-xl";

        const itemInfo = document.createElement("div");
        itemInfo.className = "flex-1";

        const name = document.createElement("h3");
        name.textContent = item.name;
        name.className = "font-semibold";

        const quantity = document.createElement("p");
        quantity.textContent = "Quantity: " + item.quantity;
        quantity.className = "text-sm text-gray-500";

        itemInfo.appendChild(name);
        itemInfo.appendChild(quantity);

        const itemTotal = document.createElement("p");
        itemTotal.textContent = "$" + (item.price * item.quantity).toFixed(2);
        itemTotal.className = "font-semibold";

        cartItem.appendChild(image);
        cartItem.appendChild(itemInfo);
        cartItem.appendChild(itemTotal);

        checkoutItems.appendChild(cartItem);
    })

    const subtotal =
        cart.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);


    const delivery = cart.length > 0 ? 2 : 0;


    const total = subtotal + delivery;


    checkoutSubtotal.textContent = "$" + subtotal.toFixed(2);

    checkoutDelivery.textContent = "$" + delivery.toFixed(2);

    checkoutTotal.textContent = "$" + total.toFixed(2);
}

displayCheckout();

placeOrderButton.addEventListener("click", () => {
    const name = customerName.value.trim();
    const phone = customerPhone.value.trim();
    const address = customerAddress.value.trim();

    if (name === "" || phone === "" || address === "") {
        alert("Please fill in all delivery information.")
        return;
    }

    const cart = getCart();

    const subtotal = cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
    const delivery = cart.length > 0 ? 2 : 0;
    const total = subtotal + delivery;

    const order = {
        orderId: Date.now(),
        customer: {
            name: name,
            phone: phone,
            address: address
        },
        item: cart,
        subtotal: subtotal,
        delivery: delivery,
        total: total,
        paymentMethod: "Cash on Delivery",
        status: "Placed",
        date: new Date().toLocaleString()
    };

    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.removeItem("cart");

    alert("Order placed successfully!");

    window.location.href = "./order.html";

    console.log(order)
})