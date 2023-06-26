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
        return "You win!";
    } else {
        return "You lose!";
    }
};

let playerSelection = "rock";// prompt("Rock, paper, or scissors?").toLowerCase();
let computerSelection = computerPlay();
console.log("Player: " + playerSelection);
console.log("Computer: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));