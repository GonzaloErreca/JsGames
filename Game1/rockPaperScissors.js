const computerChoiceDisplay = document.getElementById("computerChoice");
const userChoiceDisplay = document.getElementById("userChoice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let resultado;



possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));








function generateComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
if (randomChoice === 1) {
    computerChoice="piedra"
}else if (randomChoice ===2){   
    computerChoice="papel"
}else if (randomChoice ===3){ 
    computerChoice= "tijera"
}
computerChoiceDisplay.innerHTML = computerChoice;
}



function getResult() {
    if (computerChoice === userChoice) {
        resultado= "Empate!";
    }else if (computerChoice ==="piedra"&& userChoice==="papel"){
        result = "Perdiste!";
    }else if (computerChoice ==="piedra"&& userChoice==="tijera"){
        resultado ="Ganaste!";
    }else if (computerChoice ==="papel"&& userChoice=="piedra"){
        resultado="perdiste!";
    }else if (computerChoice ==="papel"&& userChoice=="tijera"){
        result="Ganaste!";
    }else if (computerChoice ==="tijera"&& userChoice=="piedra"){
        resultado="Ganaste!";
    }else if (computerChoice ==="tijera"&& userChoice=="papel" ){
        resultado="perdiste!";
    }
    resultDisplay.innerHTML=resultado;
}    