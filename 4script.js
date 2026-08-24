// ==============================
// ZOOM WITH MOUSE WHEEL
// ==============================

const solarSystem = document.querySelector(".solar-system");

let zoom = 1;

window.addEventListener("wheel", (e) => {

    e.preventDefault();

    if (e.deltaY < 0) {
        zoom += 0.05;
    } else {
        zoom -= 0.05;
    }

    zoom = Math.max(0.5, Math.min(2.5, zoom));

    solarSystem.style.transform =
        `translate(${offsetX}px, ${offsetY}px) scale(${zoom})`;

}, { passive: false });


// ==============================
// DRAG THE SOLAR SYSTEM
// ==============================

let isDragging = false;
let startX = 0;
let startY = 0;

let offsetX = 0;
let offsetY = 0;

solarSystem.addEventListener("mousedown", (e) => {

    isDragging = true;

    startX = e.clientX - offsetX;
    startY = e.clientY - offsetY;

});

window.addEventListener("mouseup", () => {

    isDragging = false;

});

window.addEventListener("mousemove", (e) => {

    if (!isDragging) return;

    offsetX = e.clientX - startX;
    offsetY = e.clientY - startY;

    solarSystem.style.transform =
        `translate(${offsetX}px, ${offsetY}px) scale(${zoom})`;

});


// ==============================
// COMET ANIMATION
// ==============================

function createComet() {

    const comet = document.createElement("div");

    comet.style.position = "fixed";
    comet.style.width = "6px";
    comet.style.height = "6px";
    comet.style.background = "white";
    comet.style.borderRadius = "50%";
    comet.style.boxShadow = "0 0 30px white";

    comet.style.left = "-50px";
    comet.style.top = Math.random() * 300 + "px";

    document.body.appendChild(comet);

    let x = -50;
    let y = parseFloat(comet.style.top);

    const fly = setInterval(() => {

        x += 18;
        y += 5;

        comet.style.left = x + "px";
        comet.style.top = y + "px";

        comet.style.boxShadow =
            `-40px 0 40px rgba(255,255,255,.7),
             0 0 30px white`;

        if (x > window.innerWidth + 100) {

            clearInterval(fly);
            comet.remove();

        }

    }, 16);

}

setInterval(createComet, 12000);


// ==============================
// PLANET LABELS
// ==============================

document.querySelectorAll(".planet").forEach((planet) => {

    planet.title =
        planet.classList[1].charAt(0).toUpperCase() +
        planet.classList[1].slice(1);

});


// ==============================
// END
// ==============================

console.log("🌌 Realistic Solar System Loaded Successfully!");