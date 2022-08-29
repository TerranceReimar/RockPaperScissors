const buttons = document.querySelector("#buttons");
const header = document.querySelector("header");

const title = document.createElement("h1");
const desc = document.createElement("p");
title.textContent = "Welcome to Rock, Papaer, Scissors!";
desc.textContent = "Click on one of the buttons to start.";
header.appendChild(title);
header.appendChild(desc);

// Insert button elements (rock, paper, scissors)
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

// Insert text and logo's to the buttons
rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";

// Adding Classes to style with CSS
rock.classList.add("rock");
paper.classList.add("paper");
scissors.classList.add("scissors");

// Adding elements to HTML document
buttons.appendChild(rock);
buttons.appendChild(paper);
buttons.appendChild(scissors);

function playGame(userGuess, computerGuess) {
  const items = ["Rock", "Paper", "Scissors"];
  computerGuess = items[Math.floor(Math.random() * items.length)];

  if (userGuess == computerGuess) {
    outcome.textContent = "It's a tie!";
  } else if (userGuess == "Rock" && computerGuess == "Scissors") {
    outcome.textContent = "You win!";
  } else if (userGuess == "Paper" && computerGuess == "Rock") {
    outcome.textContent = "You win!";
  } else if (userGuess == "Scissors" && computerGuess == "Paper") {
    outcome.textContent = "You win!";
  } else {
    outcome.textContent = "You lose.";
  }
}

rock.addEventListener("click", function () {
  playGame("Rock");
});
paper.addEventListener("click", function () {
  playGame("Paper");
});
scissors.addEventListener("click", function () {
  playGame("Scissors");
});

// Div that tells the user the outcome
const outcome = document.querySelector("#outcome");
const outcomeText = document.createElement("p");
outcomeText.classList.add("outcomeText");
outcome.appendChild(outcomeText);
