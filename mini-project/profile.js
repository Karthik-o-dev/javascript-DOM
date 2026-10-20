
const profileSection = document.getElementById("profile-section");
const profileButton = document.getElementById("profile-button");
const profileMenu = document.getElementById("profile-menu");

const profileName = document.getElementById("profile-name");
const profileFullName = document.getElementById("profile-full-name");
const profileEmail = document.getElementById("profile-email");
const logoutButton = document.getElementById("logout-button");

const updateProfile = () => {
    const currentUser = JSON.parse(
        localStorage.getItem("currentUser")
    );

    if (!currentUser) {
        window.location.replace("./home.html?login=1");
        return;
    }

    profileSection.classList.remove("hidden");
    profileName.textContent = currentUser.name.split(" ")[0];
    profileFullName.textContent = currentUser.name;
    profileEmail.textContent = currentUser.email;
};

profileButton.addEventListener("click", () => {
    profileMenu.classList.toggle("hidden");
});

document.addEventListener("click", (event) => {
    if (!profileSection.contains(event.target)) {
        profileMenu.classList.add("hidden");
    }
});

logoutButton.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    window.location.replace("./home.html");
});

updateProfile();
