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
    const choiceButtons = document.querySelectorAll('.choice');
    const resultsDiv = document.querySelector('#results');
    const playerScore = document.querySelector('#playerScore');
    const computerScore = document.querySelector('#computerScore');
    
    let roundCounter = 0;
    let scoreBoard = [0, 0, 0]; //win, loss, tie
    let roundResult = "";

    for (const choiceButton of choiceButtons) {

        choiceButton.addEventListener('click', function() 
        {
            playerSelection = this.textContent;
            computerSelection = getComputerChoice();
            roundResult = playRound(playerSelection, computerSelection);
            if (roundResult.includes("Win")) scoreBoard[0]++;
            if (roundResult.includes("Lose")) scoreBoard[1]++;
            if (roundResult.includes("tie")) scoreBoard[2]++;
            
            playerScore.textContent = scoreBoard[0];
            computerScore.textContent = scoreBoard[1];

            const newResult = document.createElement('p');
            newResult.textContent = roundResult;

            resultsDiv.appendChild(newResult);
        });
    };
    
}

game();