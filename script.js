"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let total = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

const bodyColor = function (body) {
  document.querySelector("body").style.backgroundColor = body;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage("No Number! 🚫");

    // When the input isn't between 0 and 20
  } else if (guess < 0 || guess > 20) {
    displayMessage("Between 1 and 20!");
  } else if (guess === secretNumber) {
    displayMessage("You were lucky! 🍀");
    document.querySelector(".number").textContent = secretNumber;

    bodyColor("#60b347");

    document.querySelector(".number").style.width = "30rem";

    // TOTAL SCORE COUNT
    total += score;
    document.querySelector(".totalscore").textContent = total;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When guess is too low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High! 📈" : "Too Low! 📈");
      score--; // or score -= 1

      displayScore(score);
    } else {
      displayMessage("You Lost! 💥");

      displayScore(0);

      bodyColor("darkred");
    }
  }
});

// Play again button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");

  displayScore(score);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  bodyColor("#222");
  document.querySelector(".number").style.width = "15rem";
});

// Submiting by pressing ENTER
document.querySelector(".guess").addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.querySelector(".check").click();
  }
});

// CLEARING INPUT
const inputField = document.querySelector(".guess");
const btn = document.querySelector(".check");

btn.addEventListener("click", () => {
  //clear input
  inputField.value = " ";
});
