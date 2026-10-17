const loginBtn = document.getElementById("login-button");
const signupBtn = document.getElementById("signup-button");

const signupBox = document.getElementById("signup-box");
const closeSignup = document.getElementById("close-signup");

const openSignup = () => {
    signupBox.classList.remove("hidden");
    signupBox.classList.add("flex");
};

const hideSignup = () => {
    signupBox.classList.remove("flex");
    signupBox.classList.add("hidden");
};

signupBtn.addEventListener("click", openSignup);
closeSignup.addEventListener("click", hideSignup);

signupBox.addEventListener("click", (event) => {
    if (event.target === signupBox) {
        hideSignup();
    }
})

const signupForm = document.getElementById("signup-form");
const signupName = document.getElementById("signup-name");
const signupEmail = document.getElementById("signup-email");
const signupPassword = document.getElementById("signup-password");
const signupConfirmPassword = document.getElementById("signup-confirm-password");
const signupMessage = document.getElementById("signup-message");

signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = signupName.value.trim();
    const email = signupEmail.value.trim().toLowerCase();
    const password = signupPassword.value;
    const confirmPassword = signupConfirmPassword.value;

    if (password != confirmPassword) {
        signupMessage.textContent = "password do not match.";
        signupMessage.className = "text-sm mb-4 text-red-600";
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUsers = users.find(user => user.email === email);

    if (existingUsers) {
        signupMessage.textContent = "This email is already registered.";
        signupMessage.className = "text-sm mb-4 text-red-600";
        return;
    }

    const newUser = {
        name: name,
        email: email,
        password: password
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    signupMessage.textContent = "Account created successfully!";
    signupMessage.className = "text-sm mb-4 text-green-700";

    signupForm.reset();

    hideSignup();
    loginBox.classList.remove("hidden");
    loginBox.classList.add("flex");

    loginEmail.value = email;
    loginMessage.textContent = "Account created! Please log in.";
    loginMessage.className = "text-sm mb-4 text-green-700";

    console.log("Demo account created:", {
        name: newUser.name,
        email: newUser.email
    });

})

const loginBox = document.getElementById("login-box");
const closeLogin = document.getElementById("close-login");
const loginForm = document.getElementById("login-form");

const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginMessage = document.getElementById("login-message");

const switchToLogin = document.getElementById("switch-to-login");
const switchToSignup = document.getElementById("switch-to-signup");

loginBtn.addEventListener("click", () => {
    loginBox.classList.remove("hidden");
    loginBox.classList.add("flex")
});

const hideLogin = () => {
    loginBox.classList.add("hidden");
    loginBox.classList.remove("flex");
};

closeLogin.addEventListener("click", hideLogin);

loginBox.addEventListener("click", (event) => {
    if (event.target === loginBox) {
        hideLogin();
    }
});

switchToLogin.addEventListener("click", () => {
    hideSignup();
    loginBox.classList.remove("hidden");
    loginBox.classList.add("flex")
});

switchToSignup.addEventListener("click", () => {
    hideLogin();
    openSignup();
});

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = loginEmail.value.trim().toLowerCase();
    const password = loginPassword.value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((user) => user.email === email && user.password === password);

    if (!user) {
        loginMessage.textContent = "Invalid email or password."
        loginMessage.className = "text-sm mb-4 text-red-600";
        return;
    }

    const currentUser = {
        name: user.name,
        email: user.email
    }

    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    loginMessage.textContent = "Login successful!";
    loginMessage.className = "text-sm mb-4 text-green-700";

    loginForm.reset();

    setTimeout(() => {
        hideLogin();
        updateAuthUI();
    }, 500);

})


const authButtons = document.getElementById("auth-buttons");
const profileSection = document.getElementById("profile-section");
const profileButton = document.getElementById("profile-button");
const profileMenu = document.getElementById("profile-menu");

const profileName = document.getElementById("profile-name");
const profileFullName = document.getElementById("profile-full-name");
const profileEmail = document.getElementById("profile-email");

const logoutButton = document.getElementById("logout-button");

const updateAuthUI = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));;

    if (currentUser) {
        authButtons.classList.add("hidden");
        profileSection.classList.remove("hidden");

        profileName.textContent = currentUser.name.split(" ")[0];
        profileFullName.textContent = currentUser.name;
        profileEmail.textContent = currentUser.email;
    } else {
        authButtons.classList.remove("hidden");
        profileSection.classList.add("hidden");
        profileMenu.classList.add("hidden");
    }
};

profileButton.addEventListener("click", (event) => {
    profileMenu.classList.toggle("hidden");
});

document.addEventListener("click", (event) => {
    if (
        !profileSection.contains(event.target)
    ) {
        profileMenu.classList.add("hidden");
    }
});

logoutButton.addEventListener("click", () => {
    localStorage.removeItem("currentUser");

    profileMenu.classList.add("hidden");
    updateAuthUI();

    alert("You have logged out successfully.");
})

updateAuthUI();

