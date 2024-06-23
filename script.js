let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const mesg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user");
const comScorePara = document.querySelector("#Com-sc");

const genComChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const ranIndex = Math.floor(Math.random() * 3);
  return option[ranIndex];
};

const Draw = () => {
  mesg.innerText = "Game was Draw .Play again!";
  mesg.style.backgroundColor = "black";
  mesg.style.color = "white";
};
const showWiner = (useWin, useChoice, comChoice) => {
  if (useWin) {
    userScore++;
    userScorePara.innerText = userScore;
    mesg.innerText = `You Win! Your ${useChoice} beats ${comChoice}`;
    mesg.style.backgroundColor = "green";
  } else {
    comScore++;
    comScorePara.innerText = comScore;
    mesg.innerText = `You Loose. ${comChoice} beats Your ${useChoice}`;
    mesg.style.backgroundColor = "red";
  }
};
const playGame = (useChoice) => {
  console.log("user choice = ", useChoice);
  const comChoice = genComChoice();
  console.log("comp choice = ", comChoice);

  if (useChoice === comChoice) {
    Draw();
  } else {
    let useWin = true;
    if (useChoice === "rock") {
      useWin = comChoice === "paper" ? false : true;
    } else if (useChoice === "paper") {
      useWin = comChoice === "scissor" ? false : true;
    } else {
      useWin = comChoice === "rock" ? false : true;
    }
    showWiner(useWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const useChoice = choice.getAttribute("id");
    playGame(useChoice);
  });
});
