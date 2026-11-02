const form = document.getElementById("signup-form") as HTMLFormElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;
const confirmInput = document.getElementById("confirm-password") as HTMLInputElement;

const nameError = document.getElementById("name-error") as HTMLElement;
const emailError = document.getElementById("email-error") as HTMLElement;
const passwordError = document.getElementById("password-error") as HTMLElement;
const confirmError = document.getElementById("confirm-error") as HTMLElement;
const successMessage = document.getElementById("success-message") as HTMLElement;

form.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault();

    const name: string = nameInput.value.trim();
    const email: string = emailInput.value.trim();
    const password: string = passwordInput.value;
    const confirm: string = confirmInput.value;

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";
    successMessage.textContent = "";



    let isValid: boolean = true;

    if (name.length < 3) {
        nameError.textContent = "Name must contain min 3 char";
        isValid = false;
    }

    const emailPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

