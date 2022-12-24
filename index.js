
// function to randomly return the computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randIndex = Math.floor(Math.random() * choices.length);
    return choices[randIndex];
}

// DOM elements
const playerChoiceContainer = document.getElementById("player-choice-container");
const playerChoicePar = document.getElementById("player-choice-par");

const computerChoiceContainer = document.getElementById("computer-choice-container");
const computerChoicePar = document.getElementById("computer-choice-par");

const resultContainer = document.getElementById("result-container");
const resultPar = document.getElementById("result-par");

// player's choice buttons
const rockButton = document.getElementById("rock-btn");
const paperButton = document.getElementById("paper-btn");
const scissorsButton = document.getElementById("scissors-btn");

// ~~~~~~~~~~~~~~~~~~

let playerSelection;

function displayResults(playerSelection, computerSelection, result) {
    playerChoiceContainer.classList.remove("hide");
    playerChoicePar.innerText = playerSelection;

    computerChoiceContainer.classList.remove("hide");
    computerChoicePar.innerText = computerSelection;

    resultContainer.classList.remove("hide");
    resultPar.innerText = result;
}

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

// variables to hold initial score values
let playerScore = 0;
let computerScore = 0;
let ties = 0;
let invalidInput = 0;

// function to play a single round of RPS
function playRound(playerSelection, computerSelection) {    

    // check if player entered valid choice
    if (playerSelection === "" || playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        invalidInput += 1;
        return "Please refresh the page and try again.";
    }

    // computer wins
    else if (computerSelection === "rock" && playerSelection === "scissors" || 
    computerSelection === "paper" && playerSelection === "rock" ||
    computerSelection === "scissors" && playerSelection === "paper") {
        computerScore += 1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`; 
    }

    // player wins
    else if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        return `You Win! ${playerSelection} beats ${computerSelection}`; 
    }

    else if (playerSelection === computerSelection) {
        ties += 1;
        return "It's a tie!"
    }
}

// test ^
// console.log(playRound(playerSelection, computerSelection));

// function to play 5 rounds of the game
// function game() {
//     let result;
//     let playerTotal = 0;
//     let computerTotal = 0;
//     let totalTies = 0;
//     let totalInvalid = 0;
//     for (let i = 0; i < 5; i++) {
//         let playerSelection = prompt("Choose rock, paper, or scissors: ").toLowerCase();
//         let computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection, computerSelection));
//         playerTotal += playerScore;
//         computerTotal += computerScore;
//         totalTies += ties;
//         totalInvalid += invalidInput;
//     }
    
//     if (computerScore > playerScore) {
//         result = "COMPUTER WINS";
//     } else if (playerScore > computerScore) {
//         result = "PLAYER WINS";
//     } else if (playerScore === computerScore) {
//         result = "TIE";
//     }

//     return `${result} \n final score \n ~~~~~~ \n player: ${playerScore} \n computer: ${computerScore} \n ties: ${ties}`;
// }

// console.log(game());