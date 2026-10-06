console.log("Hello World! Today we play Rock, Paper, Scissors!");

let humanScore = 0;
let computerScore = 0;

function getComputerchoice(max) {
    let randomnum = Math.floor(Math.random() * max);
    if (randomnum <= 0) return "rock";
    else if (randomnum == 1) return "paper";
    else return "scissors";
}

function playRound(compChoice, humanChoice) {
    const resultsDiv = document.querySelector('#results');
    
    if (compChoice == humanChoice) {
        resultsDiv.innerHTML = "It's a tie!";
    } else if (humanChoice == "rock" && compChoice == "scissors") {
        humanScore++;
        resultsDiv.innerHTML = "You win! Rock beats scissors";
    } else if (humanChoice == "scissors" && compChoice == "paper") {
        humanScore++;
        resultsDiv.innerHTML = "You win! Scissors beat paper";
    } else if (humanChoice == "paper" && compChoice == "rock") {
        humanScore++;
        resultsDiv.innerHTML = "You win! Paper beats rock";
    } else {
        computerScore++;
        resultsDiv.innerHTML = "You lose!";
    }

    resultsDiv.innerHTML += `<br><br><strong>Score - Human: ${humanScore} | Computer: ${computerScore}</strong>`;

    if (humanScore === 5) {
        resultsDiv.innerHTML = "<h2> CONGRATULATIONS! You beat the machine! ᕙ(⇀‸↼‶)ᕗ </h2>";
        disableButtons();
    } else if (computerScore === 5) {
        resultsDiv.innerHTML = "<h2> GAME OVER! The machine wins! ヽ(~_~(・_・ )ゝ </h2>";
        disableButtons();
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    }
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', () => playRound(getComputerchoice(3), "rock"));
paperBtn.addEventListener('click', () => playRound(getComputerchoice(3), "paper"));
scissorsBtn.addEventListener('click', () => playRound(getComputerchoice(3), "scissors"));

function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}
