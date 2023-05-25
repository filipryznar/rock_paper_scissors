// Rock, Paper Scissors Game 

// Generate random number for computer choice
let num = Math.floor(Math.random()*3)+1;
let win = 0;
let tie = 0;
let lost = 0;

// define function
function getComputerChoice(){
    // write if function to assing rock paper scisro to number 
    if(num===1){
        return "rock";
    } else if (num===2){
        return "paper";
    } else {
        return "scissors";
    }
}
let outcome;
//let playerSelection = prompt("Type Rock, Paper or Scissor","").toLowerCase()
// function that plays sigle round of rps
function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase()==="rock" && computerSelection === "scissors"){
        win = win + 1;
        return  "You Win! Rock beats Scissors"
    } else if (playerSelection.toLowerCase()==="rock" && computerSelection === "rock"){
        tie ++;
        return  "Its a tie";
    } else if (playerSelection.toLowerCase()==="rock" && computerSelection === "paper"){
        lost +=1;
        return  "You Lose! Paper beats Rock";
    } else if (playerSelection.toLowerCase()==="paper" && computerSelection === "rock"){
        win =win + 1;
        return "You win! Paper beats Rock";
    } else if (playerSelection.toLowerCase()==="paper" && computerSelection === "paper"){
        tie ++;
        return "Its a tie";
    } else if (playerSelection.toLowerCase()==="paper" && computerSelection === "scissors"){
        lost +=1;
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection.toLowerCase()==="scissors" && computerSelection === "rock"){
        lost +=1;
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection.toLowerCase()==="scissors" && computerSelection === "scissors"){
        tie ++;
        return "Its a tie";
    } else if (playerSelection.toLowerCase()==="scissors" && computerSelection === "paper"){
        win = win + 1;
        return "You Win! Scissors beats Paper";
    } 
}
let computerSelection = getComputerChoice();
let playerSelection = "rock";

//  Write a game function to play 5 rounds 
function game(){
    playerSelection = prompt("Type Rock, Paper or Scissors","").toLowerCase()
    for(let i = 1; i<6;i++){
        num = Math.floor(Math.random()*3)+1;
        computerSelection = getComputerChoice();
        console.log("Player chose", playerSelection);
        console.log("Computer chose",getComputerChoice());
        //playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        }
    // keep score for each round 
    console.log("Win:",win);
    console.log("Tie:",tie);
    console.log("Lost:",lost);
    win = 0;
    tie = 0;
    lost = 0;

}

