const navEl = document.querySelector(".nav");
const hamburgerEl = document.querySelector(".hamburger");

hamburgerEl.addEventListener("click", () => {
 navEl.classList.toggle("nav--open");
 hamburgerEl.classList.toggle("hamburger--open");
});

// Add an event listener to the document
document.addEventListener("click", (event) => {
 // Check if the click was outside the nav and hamburger elements
 if (!navEl.contains(event.target) && !hamburgerEl.contains(event.target)) {
    navEl.classList.remove("nav--open");
    hamburgerEl.classList.remove("hamburger--open");
 }
});
