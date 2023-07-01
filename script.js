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

function updateScore() {
    playerScoreDisplay.textContent = "Your Score:"+ "\n" + playerScore;
    computerScoreDisplay.textContent = "Computer Score:"+ "\n" + computerScore;
}

startButton.addEventListener("click", ()=>{
    startButton.remove();
    playerScoreDisplay.classList.add("card");
    computerScoreDisplay.classList.add("card");
    updateScore();
    container.classList.add("container2");
    scoreBoard.classList.add("score-board");
    displayOptions();
});


function displayOptions () {
    let section = document.getElementById("options"); 
    for (let i in beats) {
        let button = document.createElement("button");
        button.innerHTML = i;
        section.appendChild(button);
        button.addEventListener("click", () => {
            playerSelection = i;
            playGame();
            updateScore();
        });
    }
 }