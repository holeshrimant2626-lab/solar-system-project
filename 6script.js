// ==============================
// PART 6 - ADVANCED EFFECTS
// ==============================

// ---------- BLACK HOLE ----------
const blackHole = document.createElement("div");

blackHole.style.position = "fixed";
blackHole.style.width = "80px";
blackHole.style.height = "80px";
blackHole.style.borderRadius = "50%";
blackHole.style.background = "radial-gradient(circle,#000,#111,#222)";
blackHole.style.boxShadow = "0 0 40px purple";
blackHole.style.top = "8%";
blackHole.style.right = "8%";
blackHole.style.animation = "blackhole 8s linear infinite";

document.body.appendChild(blackHole);

// CSS Animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes blackhole{
0%{transform:rotate(0deg) scale(1);}
50%{transform:rotate(180deg) scale(1.1);}
100%{transform:rotate(360deg) scale(1);}
}

@keyframes spaceshipFly{
0%{transform:translateX(-150px);}
100%{transform:translateX(calc(100vw + 150px));}
}
`;
document.head.appendChild(style);

// ---------- SPACESHIP ----------
function createSpaceship(){

    const ship=document.createElement("div");

    ship.innerHTML="🚀";

    ship.style.position="fixed";
    ship.style.left="-120px";
    ship.style.top=Math.random()*window.innerHeight+"px";
    ship.style.fontSize="30px";
    ship.style.animation="spaceshipFly 18s linear forwards";

    document.body.appendChild(ship);

    setTimeout(()=>{
        ship.remove();
    },18000);

}

setInterval(createSpaceship,15000);

// ---------- SATELLITE ----------
function createSatellite(){

    const earth=document.querySelector(".earth");

    if(!earth) return;

    const sat=document.createElement("div");

    sat.innerHTML="🛰️";

    sat.style.position="absolute";
    sat.style.fontSize="14px";
    sat.style.left="30px";
    sat.style.top="0px";
    sat.style.transformOrigin="-30px 30px";

    earth.appendChild(sat);

    let angle=0;

    setInterval(()=>{

        angle+=3;

        sat.style.transform=
        `rotate(${angle}deg) translateX(30px)`;

    },16);

}

createSatellite();

// ---------- DAY / NIGHT SPACE ----------
let night=true;

setInterval(()=>{

    if(night){

        document.body.style.filter="brightness(1.15)";
        night=false;

    }else{

        document.body.style.filter="brightness(0.9)";
        night=true;

    }

},20000);

// ---------- END ----------
console.log("🌌 Part 6 Loaded Successfully!");