let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let choices = ["rock", "paper", "scissors"];
let beats = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
};

function name(params) {
    
}

function computerPlay() {
    return choices[Math.floor(Math.random() * 3)];
};


function playRound() {
    computerSelection = computerPlay();
    playerSelection = playerSelection();
    if (playerSelection == computerSelection) {
        return "tie";
    } else if (beats[computerSelection] == playerSelection) {
        return "loss";
    } else {
        return "win";
    }
};

function playGame() {
    switch (playRound()) {
        case "tie":
            console.log("It's a tie!");
            break;
        case "win":
            console.log("You win!");
            playerScore++;
            break;
        default:
            console.log("You lose!");
            computerScore++;
            break;
    }
}