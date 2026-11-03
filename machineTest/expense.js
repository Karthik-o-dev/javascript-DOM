const form = document.getElementById("form");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const descriptionInput = document.getElementById("description");
const totalExpense = document.getElementById("total-expense");
const expenseList = document.getElementById("expense-list");

let cart = [];

const updateTotal = () => {
    const totalamount = cart.reduce((total, item) => total + item.amount, 0)
    totalExpense.textContent = "Total expense: $" + totalamount;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = Number(amountInput.value);
    const category = categoryInput.value;
    const description = descriptionInput.value.trim();

    if (!amount || amount < 0) {
        return;
    }

    const expense = {
        id: Date.now(),
        amount: amount,
        category: category,
        description: description

    }

    cart.push(expense);

    const tableRow = document.createElement("tr")
    tableRow.className = "flex gap-8"


    const expenseDataAmount = document.createElement("td");
    expenseDataAmount.textContent = amount;

    const expenseDataCategory = document.createElement("td");
    expenseDataCategory.textContent = category;

    const expenseDataDescription = document.createElement("td");
    expenseDataDescription.textContent = description;

    const actionBtn = document.createElement("button");
    actionBtn.textContent = "Delete";
    actionBtn.className = "bg-red-500 text-white p-2 rounded-md";

    actionBtn.addEventListener("click", () => {
        cart = cart.filter(item => item.id !== expense.id);
        tableRow.remove();
        updateTotal();
    })

    tableRow.append(expenseDataAmount, expenseDataCategory, expenseDataDescription, actionBtn);
    expenseList.appendChild(tableRow)

    updateTotal();
    form.reset();


})

