
// function to randomly return the computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randIndex = Math.floor(Math.random() * choices.length);
    return choices[randIndex];
}

// DOM elements
const playerChoiceContainer = document.getElementById("player-choice-container");
const playerChoicePar = document.getElementById("player-choice-par");
const playerScorePar = document.getElementById("player-score-par");

const computerChoiceContainer = document.getElementById("computer-choice-container");
const computerChoicePar = document.getElementById("computer-choice-par");
const computerScorePar = document.getElementById("computer-score-par");

const resultsWrapper = document.getElementById("results-wrapper");
const resultContainer = document.getElementById("result-container");
const resultHeading = document.getElementById("result-heading");
const resultPar = document.getElementById("result-par");
const finalResultContainer = document.getElementById("final-result-container");
const finalResultHeading = document.getElementById("final-result-heading");
const finalResultPar = document.getElementById("final-result-par");

// player's choice buttons
const rockButton = document.getElementById("rock-btn");
const paperButton = document.getElementById("paper-btn");
const scissorsButton = document.getElementById("scissors-btn");

// ~~~~~~~~~~~~~~~~~~

let playerSelection;
// variables to hold initial score values
let playerScore = 0;
let computerScore = 0;
let ties = 0;
let numGames = 0;
let gameOver = false;

// TODO: disable buttons at end of game

// event listeners for buttons
rockButton.addEventListener("click", () => {
    playerSelection = rockButton.innerText.toLowerCase();
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    displayResults(playerSelection, computerSelection, result);
});

paperButton.addEventListener("click", () => {
    playerSelection = paperButton.innerText.toLowerCase();
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    displayResults(playerSelection, computerSelection, result);
});

scissorsButton.addEventListener("click", () => {
    playerSelection = scissorsButton.innerText.toLowerCase();
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    displayResults(playerSelection, computerSelection, result);
});

// function to play a single round of RPS
function playRound(playerSelection, computerSelection) {

    // add a point for computer
    if (computerSelection === "rock" && playerSelection === "scissors" || 
    computerSelection === "paper" && playerSelection === "rock" ||
    computerSelection === "scissors" && playerSelection === "paper") {
        computerScore += 1;
        console.log(computerScore);
        numGames += 1;
        if (numGames === 5) {
            gameOver = true;
        }
        return `You Lose! ${computerSelection} beats ${playerSelection}`; 
    }

    // add a point for player
    else if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        console.log(playerScore);
        numGames += 1;
        if (numGames === 5) {
            gameOver = true;
        }
        return `You Win! ${playerSelection} beats ${computerSelection}`; 
    }

    else if (playerSelection === computerSelection) {
        ties += 1;
        console.log(ties);
        numGames += 1;
        if (numGames === 5) {
            gameOver = true;
        }
        return "It's a tie!"
    }
}

function displayResults(playerSelection, computerSelection, result) {
    playerChoiceContainer.classList.remove("hide");
    playerChoicePar.innerText = playerSelection;
    playerScorePar.innerText = `Score: ${playerScore}`;

    computerChoiceContainer.classList.remove("hide");
    computerChoicePar.innerText = computerSelection;
    computerScorePar.innerText = `Score: ${computerScore}`;

    resultContainer.classList.remove("hide");
    resultPar.innerText = result;
    
    // display final result 
    let playerWins = (playerScore > computerScore) && gameOver;
    let computerWins = (computerScore > playerScore) && gameOver;
    let finalResult;
    if (playerWins) {
        finalResult = "Player wins!";
    } else if (computerWins) {
        finalResult = "Computer wins!";
    } else {
        finalResult = "It's a tie!";
    }
    if (gameOver) {
        finalResultContainer.classList.remove("hide");
        resultsWrapper.style = 'justify-content: space-between;';
        finalResultPar.innerText = `${finalResult} \n player: ${playerScore} \n computer: ${computerScore} \n ${ties ? "ties: " + ties : ""}`;
    }
}