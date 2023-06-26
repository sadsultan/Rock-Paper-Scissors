let choices = [rock, paper, scissors];
let beats = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
}

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie!";
    } else if (beats[computerSelection] == playerSelection) {
        return "You win!";
    } else {
        return "You lose!";
    }
}
