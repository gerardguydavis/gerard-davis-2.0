//CONTACT
const contact = document.querySelector(".contact-button");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".close");
const email = document.getElementById("email")

contact.addEventListener("click", function () {
    if (popup.classList.contains("hide")) {
        popup.classList.remove("hide");
        popup.classList.add("open")
    }
});

email.addEventListener("click", function () {
    if (popup.classList.contains("hide")) {
        popup.classList.remove("hide");
        popup.classList.add("open")
    }
});

closeButton.addEventListener("click", function () {
    if (popup.classList.contains("open")) {
        popup.classList.remove("open");
        popup.classList.add("hide");
    }
});

//CAROUSEL
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
let slideIndex = 1;

prevBtn.addEventListener("click", () => {
    changeSlides(-1);
});
nextBtn.addEventListener("click", () => {
    changeSlides(1);
});

const changeSlides = function (n) {
    showSlides((slideIndex += n));
};

const currentSlide = function (n) {
    showSlides((slideIndex = n));
};

const showSlides = function (n) {
    let i;
    const slides = document.getElementsByClassName("carousel-slide");
    const dots = document.getElementsByClassName("navdot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    Array.from(slides).forEach(item => (item.style.display = "none"));
    Array.from(dots).forEach(
        item => (item.className = item.className.replace(" selected", ""))
    );
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " selected";
};


showSlides(slideIndex);

