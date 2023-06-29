let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let endGameMessage = "";
let choices = ["rock", "scissors", "paper", "rock", "scissors", "paper"];
let beats = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
};

function computerPlay() {
    return choices[Math.floor(Math.random() * 6)];
};

function playRound() {
    computerSelection = computerPlay();
    if (playerSelection == computerSelection) {
        return "tie";
    } else if (beats[computerSelection] == playerSelection) {
        return "loss";
    } else {
        return "win";
    }
};

function playGame() {
    for (let i = 0; i < 5; i++) {
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
        playerSelection = "";
    }
    if (playerScore > computerScore) {
        endGameMessage="Congratulations! You win the game!";
    } else {
        endGameMessage="Too bad! You lose the game!";
    }
};

let startButton = document.querySelector("#start");
let scoreBoard = document.querySelector("#score-board");
let playerScoreDisplay = document.querySelector("#player-score");
let container = document.querySelector("#container");
let computerScoreDisplay = document.querySelector("#computer-score");
startButton.addEventListener("click", ()=>{
    startButton.remove();
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    container.classList.add("container2");
    scoreBoard.classList.add("score-board");
});