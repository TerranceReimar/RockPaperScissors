const rock = document.querySelector(".rock");
const papper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector("#result");

// Display the running score
let userScore = 0;
let computerScore = 0;
const displayUserScore = document.querySelector("#displayUserScore");
const displayComputerScore = document.querySelector("#displayComputerScore");
const getUserScore = document.createElement("p");
const getComputerScore = document.createElement("p");
displayUserScore.appendChild(getUserScore);
displayComputerScore.appendChild(getComputerScore);

function playRound(userGuess, computerGuess) {
  const items = ["Rock", "Paper", "Scissors"];
  computerGuess = items[Math.floor(Math.random() * items.length)];
  getUserScore.textContent = userScore;
  getComputerScore.textContent = computerScore;

  if (userGuess == computerGuess) {
    result.textContent = "It's a tie";
  } else if (userGuess == "Rock" && computerGuess == "Scissors") {
    userScore++;
    result.textContent = "Rock beats Scissors, You win!";
    return userScore;
  } else if (userGuess == "Paper" && computerGuess == "Rock") {
    userScore++;
    result.textContent = "Paper breats Rock, You win!";
    return userScore;
  } else if (userGuess == "Scissors" && computerGuess == "Paper") {
    userScore++;
    result.textContent = "Scissors beats Paper, You win!";
    return userScore;
  } else {
    computerScore++;
    result.textContent = `${computerGuess} beats ${userGuess}, You lose...`;
    return computerScore;
  }
}
rock.addEventListener("click", function () {
  playRound("Rock");
});
papper.addEventListener("click", function () {
  playRound("Paper");
});
scissors.addEventListener("click", function () {
  playRound("Scissors");
});
