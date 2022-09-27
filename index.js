
// function to randomly return the computer's choice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let randIndex = Math.floor(Math.random() * choices.length);
    return choices[randIndex].toLowerCase();
}
// console.log(getComputerChoice());

const playerSelection = prompt("Choose rock, paper, or scissors: ").toLowerCase();
const computerSelection = getComputerChoice();

// function to play a single round of RPS

function playRound(playerSelection, computerSelection) {    

// check if player entered valid choice
    if (playerSelection === "" || playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        console.log("Please enter a valid choice.");
    }

// computer wins
    else if (computerSelection === "rock" && playerSelection === "scissors" || 
    computerSelection === "paper" && playerSelection === "rock" ||
    computerSelection === "scissors" && playerSelection === "paper") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`; 
    }

// player wins
    else if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper") {
        return `You Win! ${playerSelection} beats ${computerSelection}`; 
    }

    else if (playerSelection === computerSelection) {
        return "It's a tie!"
    }
}

// test
console.log(playRound(playerSelection, computerSelection));
