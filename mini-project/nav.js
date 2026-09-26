const navLinks = document.querySelectorAll(".nav-link");

let currentPage = window.location.pathname.split("/").pop();

if (currentPage === "") {
    currentPage = "home.html";
}

navLinks.forEach(link => {
    const page = link.dataset.page;
    if (currentPage === page + ".html") {
        link.classList.add("bg-black", "text-white")
    } else {
        link.classList.add("text-gray-500")
    }
})