// ==============================
// SUN GLOW ANIMATION
// ==============================

let glow = 80;
let direction = 1;

function animateSun() {

    glow += direction;

    if (glow >= 140) direction = -1;
    if (glow <= 80) direction = 1;

    sun.style.boxShadow = `
        0 0 ${glow}px orange,
        0 0 ${glow + 40}px gold,
        0 0 ${glow + 80}px red
    `;

    requestAnimationFrame(animateSun);
}

animateSun();


// ==============================
// SHOOTING STAR
// ==============================

function createShootingStar() {

    const star = document.createElement("div");

    star.className = "shooting-star";

    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * 250 + "px";

    document.body.appendChild(star);

    let x = parseFloat(star.style.left);
    let y = parseFloat(star.style.top);

    const move = setInterval(() => {

        x += 20;
        y += 12;

        star.style.left = x + "px";
        star.style.top = y + "px";

        star.style.opacity -= 0.02;

        if (x > window.innerWidth || y > window.innerHeight) {
            clearInterval(move);
            star.remove();
        }

    }, 16);
}

setInterval(createShootingStar, 3000);


// ==============================
// PLANET HOVER EFFECT
// ==============================

const planets = document.querySelectorAll(".planet");

planets.forEach(planet => {

    planet.addEventListener("mouseenter", () => {

        planet.style.transform = "scale(1.25)";
        planet.style.filter = "brightness(1.4)";
        planet.style.transition = "0.3s";

    });

    planet.addEventListener("mouseleave", () => {

        planet.style.transform = "scale(1)";
        planet.style.filter = "brightness(1)";

    });

});


// ==============================
// SUN ROTATION
// ==============================

let angle = 0;

setInterval(() => {

    angle += 0.3;

    sun.style.transform = `
        rotate(${angle}deg)
        scale(${1 + Math.sin(angle / 20) * 0.03})
    `;

}, 16);