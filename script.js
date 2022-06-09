const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump () {
    if (dino.classList != "jump") {
        dino.classList.add("jump")
    }
    setTimeout( function() {
        dino.classList.remove("jump")
    }, 900)
}

let isAlive = setInterval ( function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 30 && cactusLeft > 20 && dinoTop >=140) {
        alert("GAME OVER!");
    }
}, 10)
