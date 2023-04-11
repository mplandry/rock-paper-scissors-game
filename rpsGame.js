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
  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "Congratulations, you won!! Paper covers rock";
    } else {
      return "Sorry lost this time!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      return "You won!! Scissor cuts paper!!";
    } else {
      return "Sorry you lost!!";
    }
  }
  if (userChoice === "rock") {
    if (computerChoice === "scissors") {
      return "Sorry you lost!! rock crushes scissors";
    } else {
      return "Congratulations you won!!! You pretty good!";
    }
  }
};
console.log(determineWinner("rock", "scissors"));
