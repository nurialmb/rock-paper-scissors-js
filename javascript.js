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
function playGame() {
let humanSelection;
let computerSelection;

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (computerChoice === humanChoice.toLowerCase()) {
        humanScore +=1; computerScore += 1;
        console.log("it's a tie");
    }
    else if (computerChoice==="rock" && humanChoice.toLowerCase()==="paper") {
        humanScore += 1;
        console.log("You win! Paper beats Rock");
    }
    else if (computerChoice==="rock" && humanChoice.toLowerCase()==="scissors") {
        computerScore += 1;
        console.log("You loose! Rock beats scissors");
    }
    else if (computerChoice==="paper" && humanChoice.toLowerCase()==="scissors") {
        humanScore += 1;
        console.log("You win! Scissors beat paper");
    }
    else if (computerChoice==="paper" && humanChoice.toLowerCase()==="rock") {
        computerScore += 1;
        console.log("You loose! Paper beats rock");
    }
    else if (computerChoice==="scissors" && humanChoice.toLowerCase()==="rock") {
        humanScore += 1;
        console.log("You win! Rock beats scissors");
    }
    else if (computerChoice==="scissors" && humanChoice.toLowerCase()==="paper") {
        computerScore += 1;
        console.log("You loose! Scissors beat paper");
    }
    else {
        console.log("Choose Rock | Paper | Scissors!");
    }
}
for (let i = 1; i < 5; ++i) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
}
if (computerScore==humanScore) {
    console.log("it's a tie!")
}
else if (computerScore > humanScore) {
    console.log("you lost!")
}
else {
    console.log("you win!")
}
}
playGame();