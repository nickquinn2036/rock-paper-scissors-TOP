console.log("Hello World! Today we play Rock, Paper, Scissors!  ")

function getComputerchoice(max){

    let randomnum = Math.floor(Math.random() * max);

    if(randomnum <= 0){
        return "rock"
    }

    else if(randomnum == 1){
        return "paper"
    }

    else{
        return "scissors"
    }

}

function getHumanchoice(){

    let JohnHuman = prompt("Choose Thy Weaponry!")

    let choice = JohnHuman.toLowerCase();
    
    if(choice == "rock"){

        return "rock"
    }

    else if(choice == "paper"){

        return "paper"
    }

    else if(choice == "scissors"){

            return "scissors"
    }

    else{
        return "Error 404: Weapon Not Found"
    }
}


function playGame(){


let humanScore = 0;
let computerScore = 0;

function playRound(compChoice, humanChoice){

    if (compChoice == humanChoice){
        console.log( "It's a tie!");
    }

    else if (humanChoice == "rock" && compChoice == "scissors") {
                humanScore++;
        console.log("You win! Rock beats scissors");
}

    else if (humanChoice == "scissors" && compChoice == "paper") {
                humanScore++;
        console.log("You win! Scissors beat paper");
}

    else if (humanChoice == "paper" && compChoice == "rock") {
        humanScore++;
        console.log("You win! Paper beats rock");
}

    else{
        computerScore++;
        console.log("You lose!")
    }
}

    playRound(getComputerchoice(3), getHumanchoice());
    playRound(getComputerchoice(3), getHumanchoice());
    playRound(getComputerchoice(3), getHumanchoice());
    playRound(getComputerchoice(3), getHumanchoice());
    playRound(getComputerchoice(3), getHumanchoice());

    console.log("--- FINAL SCORE ---");
    console.log("Human: " + humanScore + " | Computer: " + computerScore);

    if (computerScore > humanScore){
    
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");

    }

}


 playGame();