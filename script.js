// Exercice 1
const word = "KELLER";
const containerexercise1 = document.createElement("section");
document.body.appendChild(containerexercise1);

function display(index) {
    if (index < word.length) {
        containerexercise1.innerHTML += word[index];
        setTimeout(() => {
            display(index + 1);
        }, 1000);
    }
}
display(0);



// Exercice 2
const containerExercise2 = document.createElement("section");
document.body.appendChild(containerExercise2);

const timecalculator = document.createElement("p");
containerExercise2.appendChild(timecalculator);

let secondpassed = 0;

setInterval(function () {
    secondpassed++;

    const minutes = Math.floor(secondpassed / 60);
    const seconds = secondpassed % 60;
    const formatime = `${minutes} minute(s) ${seconds} seconde(s)`;

    timecalculator.textContent = formatime;
}, 1000);

