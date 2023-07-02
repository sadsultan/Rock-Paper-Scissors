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
    let titleCard = document.getElementById("title-card");
    titleCard.classList.remove("title-card2");
    startButton.remove();
    playerScoreDisplay.classList.add("card");
    computerScoreDisplay.classList.add("card");
    updateScore();
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
    addBlur();

    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            message="Congratulations! You win the game! \n The computer wants a rematch!";
        } else {
            message="Too bad! You lost the game! \n Better luck next time!";
        }
        message += "\n Would you like to play again?";
    }

    let displaySection = document.getElementById("displaySection");
    displaySection.classList.add("textbox");
    let roundResult = document.createElement("h2");
    roundResult.textContent = message;
    displaySection.appendChild(roundResult);

    setTimeout(function() {
        roundResult.remove();
        displaySection.classList.remove("textbox");
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