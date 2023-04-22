function getComputerChoice() {
    switch (Math.floor(Math.random()*3)) {
        case 0:
            return "ROCK"; break;
        case 1:
            return "PAPER"; break;
        case 2:
            return "SCISSORS"; break;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    let result;
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    if (playerSelection === "ROCK" && computerSelection === "PAPER"){
        result = "You Lose! Paper beats Rock";
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        result = "You Lose! Scissors beats Paper";
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        result = "You Lose! Rock beats Scissors";
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        result =  "You Win! Paper beats Rock";
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        result = "You Win! Scissors beats Paper";
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        result = "You Win! Rock beats Scissors";
    }
    return result;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));