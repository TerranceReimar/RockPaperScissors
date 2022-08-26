let playerScore = 0;
let computerScore = 0;

function getComputerChoice(computerChoice) {
  let rockPaperScissors = ["Rock", "Paper", "Scissors"];
  computerChoice =
    rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
  return computerChoice;
}

function playRound(computerSelection, playerSelection) {
  playerSelection = prompt("Enter Rock/Paper/Scissors");
  playerSelection = `${playerSelection
    .slice(0, 1)
    .toUpperCase()}${playerSelection.slice(1).toLowerCase()}`;

  computerSelection = getComputerChoice();
  console.log(playerSelection);
  console.log(computerSelection);

  if (computerSelection == playerSelection) {
    alert("It's a tie!");
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    alert("You win, Rock beats Scissors");
    playerScore++;
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    alert("You win, Paper beats Rock");
    playerScore++;
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    alert("You win, Scissors beats Paper");
    playerScore++;
  } else {
    alert(`You lose, ${computerSelection} beats ${playerSelection}`);
    computerScore++;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  if (computerScore == playerScore) {
    alert("It's a tie game!");
  } else if (playerScore > computerScore) {
    alert(
      `You win, Computer score ${computerScore} - Player score ${playerScore}`
    );
  } else {
    alert(
      `Computer wins, Computer score ${computerScore} - Player Score ${playerScore}`
    );
  }
}

game();
