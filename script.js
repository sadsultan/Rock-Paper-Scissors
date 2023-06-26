let playerSelection;
let computerSelection;
let choices = ["rock", "paper", "scissors"];
let beats = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
};

function computerPlay() {
    return choices[Math.floor(Math.random() * 3)];
};


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie!";
    } else if (beats[computerSelection] == playerSelection) {
        return "You lose the round!";
    } else {
        return "You win this round!";
    }
};

while (1) {
    playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    computerSelection = computerPlay();
    console.log("Player: " + playerSelection);
    console.log("Computer: " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
}