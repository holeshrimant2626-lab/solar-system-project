// ==============================
// EARTH SELF ROTATION
// ==============================

const earth = document.querySelector(".earth");

let earthAngle = 0;

function rotateEarth() {

    earthAngle += 0.5;

    earth.style.backgroundPosition = earthAngle + "px 0";

    requestAnimationFrame(rotateEarth);
}

rotateEarth();


// ==============================
// MOON GLOW
// ==============================

const moon = document.querySelector(".moon");

let moonGlow = 5;
let moonDir = 0.2;

setInterval(() => {

    moonGlow += moonDir;

    if (moonGlow > 12) moonDir = -0.2;
    if (moonGlow < 5) moonDir = 0.2;

    moon.style.boxShadow = `0 0 ${moonGlow}px white`;

}, 50);


// ==============================
// SATURN RING ANIMATION
// ==============================

const ring = document.querySelector(".ring");

if (ring) {

    let ringAngle = -25;

    setInterval(() => {

        ringAngle += 0.2;

        ring.style.transform = `rotate(${ringAngle}deg)`;

    }, 16);

}


// ==============================
// ASTEROID BELT PARTICLES
// ==============================

const belt = document.querySelector(".asteroid-belt");

if (belt) {

    for (let i = 0; i < 120; i++) {

        const rock = document.createElement("div");

        rock.style.position = "absolute";
        rock.style.width = "3px";
        rock.style.height = "3px";
        rock.style.background = "#999";
        rock.style.borderRadius = "50%";

        const angle = Math.random() * Math.PI * 2;
        const radius = 250 + Math.random() * 10;

        rock.style.left =
            (260 + Math.cos(angle) * radius) + "px";

        rock.style.top =
            (260 + Math.sin(angle) * radius) + "px";

        belt.appendChild(rock);

    }

}


// ==============================
// PLANET CLICK EFFECT
// ==============================

document.querySelectorAll(".planet").forEach(planet => {

    planet.addEventListener("click", () => {

        planet.animate([
            { transform: "scale(1)" },
            { transform: "scale(1.6)" },
            { transform: "scale(1)" }
        ], {
            duration: 500
        });

    });

});


// ==============================
// SPACE AMBIENT EFFECT
// ==============================

let hue = 220;

setInterval(() => {

    hue += 0.2;

    document.body.style.background =
        `radial-gradient(circle,
        hsl(${hue},70%,12%),
        #000814,
        #000)`;

    if (hue > 260) hue = 220;

}, 80);