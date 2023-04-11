// created a user input with error message if needed

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "scissors" ||
    userInput === "paper"
  ) {
    return userInput;
  } else {
    console.log("error please type: rock, paper, scissors");
  }
};
// created a function that the computer choice randomly
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "scissors";
    case 1:
      return "paper";

    case 2:
      return "rock";
  }
};

// created a winner of game. Compare user choice with computer choice
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "You have a tie";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer has won,  Paper covers rock";
    } else {
      return "Congratulation, you won!!!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      return "You won!! Scissor cuts paper!!";
    } else {
      return "Sorry you lost!!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Sorry you lost!! scissors cuts paper!";
    } else {
      return "Congratulations you won!!! You pretty good!";
    }
  }
};
const playGame = () => {
  const userChoice = getUserChoice("paper");
  const computerChoice = getComputerChoice();
  console.log(`You threw:  ${userChoice}`);
  console.log(`The computer threw: ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
