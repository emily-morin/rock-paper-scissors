
// function to randomly return the computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randIndex = Math.floor(Math.random() * choices.length);
    return choices[randIndex];
}

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
function game() {
    let result;
    let playerTotal = 0;
    let computerTotal = 0;
    let totalTies = 0;
    let totalInvalid = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose rock, paper, or scissors: ").toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        playerTotal += playerScore;
        computerTotal += computerScore;
        totalTies += ties;
        totalInvalid += invalidInput;
    }
    
    if (computerScore > playerScore) {
        result = "COMPUTER WINS";
    } else if (playerScore > computerScore) {
        result = "PLAYER WINS";
    } else if (playerScore === computerScore) {
        result = "TIE";
    }

    return `${result} \n final score \n ~~~~~~ \n player: ${playerScore} \n computer: ${computerScore} \n ties: ${ties}`;
}

console.log(game());