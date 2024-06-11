function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    if (computerChoice == 0) {
        computerChoice = "rock"
    }
    else if (computerChoice == 1) {
        computerChoice = "paper"
    }
    else {
        computerChoice = "scissors"
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Choose Rock | Paper | Scissors")
    return humanChoice;
}
