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
    roundResults(playRound());
    if (playerScore == 5 || computerScore == 5) {
    if (playerScore > computerScore) {
        endGameMessage="Congratulations! You win the game!";
    } else {
        endGameMessage="Too bad! You lose the game!";
    }}
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
        });
    }
}

function roundResults(result) {
    playerSelection = "";
    let message=" this round! \n On to next one!!"
    switch (result) {
        case "tie":
            message = "You tied" + message;
            break;
        case "win":
            playerScore++;
            message = "You won" + message;
            break;
        default:
            computerScore++;
            message = "You lost" + message;
            break;
    }
    updateScore();
    let roundResult = document.createElement("section");
    roundResult.classList.add("textbox");
    roundResult.textContent = message;
    container.appendChild(roundResult);
    addBlur();
    setTimeout(function() {
        roundResult.remove();
        removeBlur();
    }, 2000);
}

function addBlur() {
    let blurElements = document.querySelectorAll(".container > *:not(.textbox)");
    for (let i = 0; i < blurElements.length; i++) {
        blurElements[i].classList.add("blur");
    };
}

function removeBlur() {
    let blurElements = document.querySelectorAll(".container > *:not(.textbox)");
    for (let i = 0; i < blurElements.length; i++) {
        blurElements[i].classList.remove("blur");
    };
}