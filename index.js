
// function to randomly return the computer's choice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let randIndex = Math.floor(Math.random() * choices.length);
    return choices[randIndex];
}

console.log(getComputerChoice());