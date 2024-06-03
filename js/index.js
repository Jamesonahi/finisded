const cancelBtn = document.getElementById("cancelBtn");
const openBtn = document.getElementById("open");
const mobileNav = document.querySelector(".mobile");

cancelBtn.addEventListener("click", function () {
    mobileNav.classList.remove("toggle");
});

openBtn.addEventListener("click", function () {
    mobileNav.classList.add("toggle");
});