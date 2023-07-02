let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;
let endGameMessage = "";
let choices = ["rock", "scissors", "paper", "rock", "scissors", "paper"];
let beats = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
};

let startButton = document.querySelector("#start");
let scoreBoard = document.querySelector("#score-board");
let playerScoreDisplay = document.querySelector("#player-score");
let container = document.querySelector("#container");
let computerScoreDisplay = document.querySelector("#computer-score");

startButton.addEventListener("click", ()=>{
    let titleCard = document.getElementById("title-card");

    titleCard.classList.remove("title-card2");
    startButton.remove();

    playerScoreDisplay.classList.add("card");
    computerScoreDisplay.classList.add("card");
    scoreBoard.classList.add("score-board");

    updateScore(playerScore, computerScore, playerSelection, computerSelection);
    displayOptions();
});

function computerPlay() {
    return choices[Math.floor(Math.random() * 6)];
};

function updateScore(playerScore, computerScore, playerSelection, computerSelection) {
    playerScoreDisplay.textContent = "Your Score:\n\n" + playerScore + "\n\nYou Chose:\n\n " + playerSelection;
    if (!(computerSelection === "")) {
        computerScoreDisplay.textContent = "Computer Score:\n\n"+ computerScore + "\n\nThe Computer chose: \n\n Thinking..."; 
        setTimeout(() => {
            computerScoreDisplay.textContent = "Computer Score:\n\n"+ computerScore + "\n\nThe Computer chose: \n\n " + computerSelection;
        },1000);
    } else {
        computerScoreDisplay.textContent = "Computer Score:\n\n"+ computerScore + "\n\nThe Computer chose: \n\n " + computerSelection;
    }
}

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

function playGame() {
    computerSelection = computerPlay();
    let message= playRound(playerSelection, computerSelection) + " this round! \n On to next one!!"
    let continueMessage = "Continue";

    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            message="Congratulations! You win the game! \n The computer wants a rematch!";
        } else {
            message="Too bad! You lost the game! \n Better luck next time!";
        }
        message += "\n Would you like to play again?";
        continueMessage = "Play Again";
        playerScore=0
        computerScore=0
    }

    setTimeout(() => {
        addBlur();
        displaySection(message, continueMessage);
    },2500);
}

function playRound(playerSelection, computerSelection) {
    updateScore(playerScore, computerScore, playerSelection, computerSelection);
    if (playerSelection == computerSelection) {
        return "You tied";
    } else if (beats[computerSelection] == playerSelection) {
        computerScore++;
        return "You lost";
    } else {
        playerScore++;
        return "You won";
    }
};

function displaySection(message, continueMessage) {
    let displaySection = document.getElementById("displaySection");
    let roundResult = document.createElement("h2");
    let continueButton = document.createElement("button");

    displaySection.classList.add("textbox");

    continueButton.innerHTML = continueMessage;
    roundResult.textContent = message;

    displaySection.appendChild(roundResult);
    displaySection.appendChild(continueButton);

    continueButton.addEventListener("click", () => {
        roundResult.remove();
        continueButton.remove()
        displaySection.classList.remove("textbox");
        removeBlur();
        updateScore(playerScore, computerScore, "", "");
    });
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