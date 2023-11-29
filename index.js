const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice === 0){
        return "Rock";
    } else if(computerChoice === 1){
        return "Paper";
    } else {
        return "Scissors";
    }
};

const getPlayerChoice = () => {
    let choice = prompt("Rock or Paper or Scissors ?");
    let playerChoice = choice.split('');
    let result = playerChoice[0].toUpperCase();
    for(let i = 1; i < playerChoice.length; i++){
        result += playerChoice[i].toLowerCase();
    } 
    return result;
};

function Playround(computerSelection, playerSelection){
    let lose = `You Lose ! ${computerSelection} beats ${playerSelection}`;
    let win = `You Win ! ${playerSelection} beats ${computerSelection}`;
    if (computerSelection === "Rock" && 
        playerSelection === "Scissors"){
        return lose;
    } else if (computerSelection === "Rock" && 
               playerSelection === "Paper"){
        return win;
    } else if (computerSelection === "Paper" && 
               playerSelection === "Scissors"){
        return win;
    } else if (computerSelection === "Paper" && 
               playerSelection === "Rock"){
        return lose;
    } else if (computerSelection === "Scissors" && 
               playerSelection === "Rock"){
        return win;
    } else if (computerSelection === "Scissors" && 
               playerSelection === "Paper"){
        return lose;
    } else if (computerSelection === "Scissors" && 
               playerSelection === "Scissors"){
        return `Draw ! Computer chooses ${computerSelection} and you choose ${playerSelection}`;
    } else if (computerSelection === "Paper" && 
               playerSelection === "Paper"){
        return `Draw ! Computer chooses ${computerSelection} and you choose ${playerSelection}`;
    } else if (computerSelection === "Rock" && playerSelection === "Rock"){
        return `Draw ! Computer chooses ${computerSelection} and you choose ${playerSelection}`;
    } else {
        alert("Please enter Rock or Paper or Scissors:");
        const playerSelection = getPlayerChoice();
        return Playround(computerSelection, playerSelection);
    }
}

function getPlayerScore(round, playerScore){
    if(round.includes("Win")){
        return playerScore += 1;
    } else {
        return playerScore;
    }
}

function getComputerScore(round, computerScore){
    if(round.includes("Lose")){
        return computerScore += 1;
    } else {
        return computerScore;
    }

}

function game(){
    const MAX_ROUND = 10;
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < MAX_ROUND; i++){
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        let round = Playround(computerSelection, playerSelection);
        alert(round);
        playerScore = getPlayerScore(round, playerScore);
        computerScore = getComputerScore(round, computerScore);
        alert(` Player : ${playerScore}      Computer : ${computerScore}    Round left : ${(MAX_ROUND - 1) - i}`);
    }
    if(playerScore < computerScore){
        return "You Lose !";
    }
    if(computerScore < playerScore){
        return "You Win !";
    } else {
        return "Draw";
    }
}

const gameResult = game();
alert(gameResult);


