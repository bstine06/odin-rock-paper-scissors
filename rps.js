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

function game() {
    let playerSelection = "";
    let roundCounter = 0;
    let scoreBoard = [0,0,0]; //win, loss, tie
    let roundResult = "";
    while (roundCounter < 5) {
        playerSelection = prompt("Enter 'Rock', 'Paper', or 'Scissors':");
        roundResult = playRound(playerSelection, getComputerChoice());
        if (roundResult.includes("Win")) scoreBoard[0]++;
        if (roundResult.includes("Lose")) scoreBoard[1]++;
        if (roundResult.includes("tie")) scoreBoard[2]++;
        console.log(roundResult);
        roundCounter++;
    }
    console.log("\nFinal Results:");
    let gameResult = (scoreBoard[0]>scoreBoard[1]) ? "You win!" : "You lose!";
    if (scoreBoard[0] === scoreBoard[1]) gameResult = "It's a tie!";
    console.log(gameResult);
    console.log("Wins: "+scoreBoard[0]);
    console.log("Losses: "+scoreBoard[1]);
    console.log("Ties: "+scoreBoard[2]);
}

game();