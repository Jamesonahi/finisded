var swiper = new Swiper(".heroslide", {
    slidesPerView: "auto",
    speed: 4000,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        //   el: ".swiper-pagination",
        clickable: true,
    },
});

const cancelBtn = document.getElementById("cancelBtn");
const openBtn = document.getElementById("open");
const mobileNav = document.querySelector(".mobile");

cancelBtn.addEventListener("click", function () {
    mobileNav.classList.remove("toggle");
});

openBtn.addEventListener("click", function () {
    mobileNav.classList.add("toggle");
});