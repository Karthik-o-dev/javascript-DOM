"use strict";
const form = document.getElementById("signup-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm-password");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const confirmError = document.getElementById("confirm-error");
const successMessage = document.getElementById("success-message");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirm = confirmInput.value;
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";
    successMessage.textContent = "";
    let isValid = true;
    if (name.length < 3) {
        nameError.textContent = "Name must contain min 3 char";
        isValid = false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Enter valid email";
        isValid = false;
    }
    if (password.length < 8) {
        passwordError.textContent = "Min 8 char needed";
        isValid = false;
    }
    if (password !== confirm) {
        confirmError.textContent = "password do not match";
        isValid = false;
    }
    if (isValid) {
        successMessage.textContent = "successFully signuped";
        form.reset();
    }
});
