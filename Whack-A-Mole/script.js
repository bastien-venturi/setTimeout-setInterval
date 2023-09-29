// JavaScript code for the game
const holes = document.querySelectorAll(".hole");
const scoreDisplay = document.getElementById("score");
let score = 0;

function createMole() {
    const randomHoleIndex = Math.floor(Math.random() * holes.length);
    const moleHole = holes[randomHoleIndex];

    if (!moleHole.classList.contains("up")) {
        moleHole.classList.add("up");

        setTimeout(() => {
            moleHole.classList.remove("up");
            createMole();
        }, 1000); // Les taupes disparaissent après 1 seconde (1000ms)
    } else {
        // Vous avez raté la taupe, vous pouvez soustraire des points ici si nécessaire
        createMole();
    }
}

function whackMole(event) {
    if (!event.target.classList.contains("up")) return;

    event.target.classList.remove("up");
    score++;
    scoreDisplay.textContent = score;
}

holes.forEach((hole) => {
    hole.addEventListener("click", whackMole);
});

// Démarrer le jeu lorsque vous êtes prêt
function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    createMole();
}

startGame();
