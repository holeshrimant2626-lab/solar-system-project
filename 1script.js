// ==============================
// REALISTIC SOLAR SYSTEM
// script.js - Part 1
// ==============================

// Get Stars Container
const starsContainer = document.getElementById("stars");

// ==============================
// CREATE STARS
// ==============================

function createStars(count = 800) {

    starsContainer.innerHTML = "";

    for (let i = 0; i < count; i++) {

        const star = document.createElement("div");

        star.className = "star";

        const size = Math.random() * 3 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.left = Math.random() * window.innerWidth + "px";
        star.style.top = Math.random() * window.innerHeight + "px";

        star.style.opacity = Math.random();

        star.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        starsContainer.appendChild(star);
    }
}

// Create stars on page load
createStars();

// ==============================
// RANDOM STAR BRIGHTNESS
// ==============================

setInterval(() => {

    const stars = document.querySelectorAll(".star");

    stars.forEach(star => {

        star.style.opacity = Math.random();

    });

}, 1500);

// ==============================
// WINDOW RESIZE
// ==============================

window.addEventListener("resize", () => {

    createStars();

});

// ==============================
// SELECT SUN
// ==============================

const sun = document.querySelector(".sun");

// More animations will be added in Part 2.