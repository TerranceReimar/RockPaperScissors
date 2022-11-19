let userScore = 0;
let computerScore = 0;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const result = document.querySelector(".display-result");
const score = document.querySelector(".display-score");

function getRandom(computerGuess) {
  const choiceList = ["Rock", "Paper", "Scissors"];
  computerGuess = choiceList[Math.floor(Math.random() * choiceList.length)];
  return computerGuess.toUpperCase();
}

let userGuess = "";

rock.onclick = () => {
  userGuess = "ROCK";
  playRound();
  checkScore();
};

paper.onclick = () => {
  userGuess = "PAPER";
  playRound();
  checkScore();
};

scissors.onclick = () => {
  userGuess = "SCISSORS";
  playRound();
  checkScore();
};

function playRound(computerGuess) {
  computerGuess = getRandom();

  if (userGuess == computerGuess) {
    result.textContent = `You picked ${userGuess} and the computer picked ${computerGuess} 
    It's a draw, keep going.`;
  } else if (userGuess == "ROCK" && computerGuess == "SCISSORS") {
    result.textContent = `You picked ${userGuess} and the computer picked ${computerGuess} 
    You won!`;
    userScore++;
  } else if (userGuess == "PAPER" && computerGuess == "ROCK") {
    result.textContent = `You picked ${userGuess} and the computer picked ${computerGuess} 
    You won!`;
    userScore++;
  } else if (userGuess == "SCISSORS" && computerGuess == "PAPER") {
    result.textContent = `You picked ${userGuess} and the computer picked ${computerGuess} 
    You won!`;
    userScore++;
  } else {
    result.textContent = `You picked ${userGuess} and the computer picked ${computerGuess} 
    You lost.`;
    computerScore++;
  }
}

function checkScore() {
  if (userScore == 5 || computerScore == 5) {
    if (userScore > computerScore) {
      result.textContent = `You beat the computer, well done!`;
      result.setAttribute("style", "font-weight: bold;");
    } else if (computerScore > userScore) {
      result.textContent = `The computer won the game, better luck next time.`;
      result.setAttribute("style", "font-weight: bold;");
    }
    userScore = 0;
    computerScore = 0;
    score.textContent = "Click game cards to restart.";
  } else if (userScore < 5 || computerScore < 5) {
    score.textContent = `User score : ${userScore} Computer score : ${computerScore}`;
    result.setAttribute("style", "font-weight: none;");
  }
}
