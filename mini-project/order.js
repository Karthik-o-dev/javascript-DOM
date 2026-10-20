const ordersContainer = document.getElementById("orders-container");

const getOrders = () => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
        return [];
    }
    return orders.filter(order => order.userEmail === currentUser.email);
}

const displayOrder = () => {
    const orders = getOrders();

    ordersContainer.innerHTML = "";

    if (orders.length === 0) {
        ordersContainer.innerHTML = `
        <div class="bg-white rounded-2xl p-8 text-center">
                <h2 class="text-xl font-bold text-[#003B20]">
                    No Orders Yet
                </h2>
                <p class="text-gray-500 mt-2">
                    Your next delicious meal is waiting!
                </p>
        </div>`;
        return;
    }

    orders.forEach(order => {
        const orderCard = document.createElement("div");
        orderCard.className = "bg-white rounded-2xl border border-gray-100 p-4 mb-3 flex flex-wrap items-center gap-4";

        const iconBox = document.createElement("div");
        iconBox.className =
            "w-10 h-10 rounded-xl bg-[#D8F7E3] text-[#003B20] flex items-center justify-center shrink-0";

        const icon = document.createElement("i");
        icon.className = "fa-solid fa-check";

        iconBox.appendChild(icon);

        const orderInfo = document.createElement("div");
        orderInfo.className = "flex-1 min-w-0";

        const orderId = document.createElement("h2");
        orderId.className = "font-bold text-[#003B20]";

        orderId.textContent = "#CRV-" + String(order.orderId).slice(-5);

        const status = document.createElement("span");
        status.textContent = order.status || "Placed";
        status.className = "inline-block ml-2 text-xs font-semibold bg-[#D8F7E3] text-[#003B20] px-2 py-1 rounded-full";

        orderId.appendChild(status);

        const itemSummary = document.createElement("p");
        itemSummary.className = "text-xs text-gray-500 mt-1";

        console.log("Full order:", order);
        console.log("Saved items:", order.items);

        const itemCount = (order.item || []).reduce((sum, item) => sum + Number(item.quantity || 0), 0);

        const itemNames = (order.item || []).map(item => {
            return item.name + (item.quantity > 1 ? ` (x${item.quantity})` : "");
        }).join(", ");

        itemSummary.textContent = `${itemCount} item • ${itemNames}`;

        const orderDate = document.createElement("p");
        orderDate.className = "text-xs text-gray-500 mt-1";
        orderDate.textContent = order.date;

        orderInfo.appendChild(orderId);
        orderInfo.appendChild(itemSummary);
        orderInfo.appendChild(orderDate);

        const total = document.createElement("p");
        total.className = "font-bold text-lg whitespace-nowrap";
        total.textContent = "$" + Number(order.total).toFixed(2);

        orderCard.appendChild(iconBox);
        orderCard.appendChild(orderInfo);
        orderCard.appendChild(total);

        ordersContainer.appendChild(orderCard);
    })
};

displayOrder();