let userLives;
let computerLives;

const startGame = prompt(
  "Would you like to play a game of Rock Paper Scissors (yes/no)"
);

if (startGame == "yes") {
  userLives = 5;
  computerLives = 5;
} else if (startGame == "no") {
  alert("It's sad to see you go so soon...");
}

while (computerLives >= 1 && userLives >= 1) {
  const rockPaperScissors = Array("Rock", "Paper", "Scissors");
  const computerChoice =
    rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];

  let userInput = prompt("Please enter Rock, Paper or Scissors");
  userInput = `${userInput.slice(0, 1).toUpperCase()}${userInput
    .slice(1)
    .toLowerCase()}`;

  let userChoice;

  if (userInput == "Rock" || userInput == "Paper" || userInput == "Scissors") {
    userChoice = userInput;
  } else {
    alert("Please enter a valid input");
  }

  console.log(computerChoice);
  console.log(userChoice);
  if (userChoice == computerChoice) {
    alert("It's a tie!");
  } else if (userChoice == "Rock") {
    if (computerChoice == "Paper") {
      alert("Computer wins...");
      userLives--;
    } else if (computerChoice == "Scissors") {
      alert("You win!");
      computerLives--;
    }
  } else if (userChoice == "Paper") {
    if (computerChoice == "Scissors") {
      alert("Computer wins...");
      userLives--;
    } else if (computerChoice == "Rock") {
      alert("You win!");
      computerLives--;
    }
  } else if (userChoice == "Scissors") {
    if (computerChoice == "Rock") {
      alert("Computer wins...");
      userLives--;
    } else if (computerChoice == "Paper") {
      alert("You win!");
      computerLives--;
    }
  }
  console.log(userLives);
  console.log(computerLives);
}

if (userLives == 0) {
  alert("The computer won the game :(");
} else if (computerLives == 0) {
  alert("You won the game!");
}
