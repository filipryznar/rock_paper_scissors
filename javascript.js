// Rock, Paper Scissors Game

// Generate random number for computer choice
let num = Math.floor(Math.random() * 3) + 1;
let win = 0;
let tie = 0;
let lost = 0;

// define function
function getComputerChoice() {
  // write if function to assing rock paper scisro to number
  if (num === 1) {
    return "rock";
  } else if (num === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}
let outcome;
//let playerSelection = prompt("Type Rock, Paper or Scissor","").toLowerCase()
// function that plays sigle round of rps
function playRound(playerSelection, computerSelection) {
  num = Math.floor(Math.random() * 3) + 1;
  computerSelection = getComputerChoice();
  if (playerSelection === "rock" && computerSelection === "scissors") {
    win = win + 1;
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    tie++;
    return "It's a tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    lost += 1;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    win = win + 1;
    return "You win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    tie++;
    return "It's a tie";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    lost += 1;
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    lost += 1;
    return "You Lose! Rock beats Scissors";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    tie++;
    return "It's a tie";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    win = win + 1;
    return "You Win! Scissors beats Paper";
  }
}
let computerSelection = getComputerChoice();
let playerSelection = "rock";

//OLD CODE
//  Write a game function to play 5 rounds
function game() {
  //playerSelection = prompt("Type Rock, Paper or Scissors", "").toLowerCase();
  for (let i = 1; i < 6; i++) {
    num = Math.floor(Math.random() * 3) + 1;
    computerSelection = getComputerChoice();
    console.log("Player chose", playerSelection);
    console.log("Computer chose", getComputerChoice());
    //playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
  }
  // keep score for each round
  console.log("Win:", win);
  console.log("Tie:", tie);
  console.log("Lost:", lost);
  win = 0;
  tie = 0;
  lost = 0;
}

// dipslay each round winner
// display score during games
// once the game reaches 5 rounds diplay ultimate winner
let i = 0;
function gameV2() {
  wdiv.textContent = "";
  //console.log(i);
  div.textContent = playRound(playerSelection, computerSelection);

  resContainer.appendChild(div);
  playScore.textContent = win;
  compScore.textContent = lost;

  if (win == 5) {
    resContainer.style.color = "blue";
    resContainer.textContent = "Player won, computer lost ";
    win = 0;
    tie = 0;
    lost = 0;
    buttons.forEach((buttons) =>
      buttons.removeEventListener("click", getPlayerChoice)
    );
  } else if (lost == 5) {
    resContainer.style.color = "red";
    resContainer.textContent = "Computer won, player lost";
    win = 0;
    tie = 0;
    lost = 0;
    buttons.forEach((buttons) =>
      buttons.removeEventListener("click", getPlayerChoice)
    );
  }
}

const buttons = document.querySelectorAll("button");
const div = document.createElement("div");
const score = document.createElement("div");
const wdiv = document.createElement("div");
const resContainer = document.querySelector(".results");
const playScore = document.querySelector(".player-score");
const compScore = document.querySelector(".computer-score");
const reset = document.querySelector(".reset");
reset.addEventListener("click", () => location.reload());

// When player clicks play one round of rps
buttons.forEach((buttons) =>
  buttons.addEventListener("click", getPlayerChoice)
);

function getPlayerChoice(e) {
  playerSelection = e.target.className;
  //playerSelection = e.target.textContent;
  gameV2();
}
