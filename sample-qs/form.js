const form = document.getElementById("signup-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm-password");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirm = confirmInput.value;

    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("password-error").textContent = "";
    document.getElementById("confirm-error").textContent = "";
    document.getElementById("success-message").textContent = "";

    let isValid = true;

    if (name.length < 3) {
        document.getElementById("name-error").textContent = "Name must contain min 3 char";
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        document.getElementById("email-error").textContent = "Enter valid email";
        isValid = false;
    }

    if (password.length < 8) {
        document.getElementById("password-error").textContent = "Min 8 char needed";
        isValid = false;
    }

    if (password !== confirm) {
        document.getElementById("confirm-error").textContent = "password do not match";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("success-message").textContent = "successFully signuped";
        form.reset();
    }

});

