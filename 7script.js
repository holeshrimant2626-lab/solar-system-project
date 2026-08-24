// ==============================
// PART 7 - GALAXY EFFECTS
// ==============================

// ---------- PLANET INFORMATION ----------

const planetInfo = {
    mercury: "☿ Mercury\nClosest planet to the Sun",
    venus: "♀ Venus\nHottest planet",
    earth: "🌍 Earth\nOur Home Planet",
    mars: "♂ Mars\nThe Red Planet",
    jupiter: "♃ Jupiter\nLargest planet",
    saturn: "🪐 Saturn\nFamous for its rings",
    uranus: "♅ Uranus\nIce Giant",
    neptune: "♆ Neptune\nFarthest Planet"
};

document.querySelectorAll(".planet").forEach(planet=>{

    planet.addEventListener("click",()=>{

        const name=[...planet.classList].find(c=>planetInfo[c]);

        if(name){
            alert(planetInfo[name]);
        }

    });

});


// ==============================
// COMET WITH TAIL
// ==============================

function createCometTail(){

    const comet=document.createElement("div");

    comet.style.position="fixed";
    comet.style.left="-120px";
    comet.style.top=Math.random()*250+"px";
    comet.style.width="120px";
    comet.style.height="3px";

    comet.style.background=
    "linear-gradient(to right,transparent,white)";

    comet.style.transform="rotate(-25deg)";
    comet.style.filter="blur(1px)";

    document.body.appendChild(comet);

    let x=-120;
    let y=parseFloat(comet.style.top);

    const fly=setInterval(()=>{

        x+=25;
        y+=10;

        comet.style.left=x+"px";
        comet.style.top=y+"px";

        if(x>window.innerWidth+150){

            clearInterval(fly);
            comet.remove();

        }

    },16);

}

setInterval(createCometTail,10000);


// ==============================
// SPACE DUST
// ==============================

setInterval(()=>{

    const dust=document.createElement("div");

    dust.style.position="fixed";
    dust.style.width="2px";
    dust.style.height="2px";
    dust.style.borderRadius="50%";
    dust.style.background="white";

    dust.style.left=Math.random()*window.innerWidth+"px";
    dust.style.top="-10px";

    document.body.appendChild(dust);

    let y=-10;

    const fall=setInterval(()=>{

        y+=2;

        dust.style.top=y+"px";
        dust.style.opacity-=0.01;

        if(y>window.innerHeight){

            clearInterval(fall);
            dust.remove();

        }

    },30);

},120);


// ==============================
// SPACE CLOCK
// ==============================

const clock=document.createElement("div");

clock.style.position="fixed";
clock.style.top="15px";
clock.style.right="15px";
clock.style.color="white";
clock.style.fontFamily="Arial";
clock.style.fontSize="18px";
clock.style.background="rgba(0,0,0,.4)";
clock.style.padding="10px";
clock.style.borderRadius="10px";

document.body.appendChild(clock);

setInterval(()=>{

    const now=new Date();

    clock.innerHTML=
    "🛰️ "+now.toLocaleTimeString();

},1000);


// ==============================
// FINISH
// ==============================

console.log("🌌 Part 7 Loaded Successfully");
console.log("🚀 Welcome to the Ultimate Solar System!");