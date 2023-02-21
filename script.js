"use strict";

// secret Number Generating
let secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;
let heighScore = 0;

// show message function
let showMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// click event
document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);

  if (!guessNumber) {
    // document.querySelector(".message").textContent = "No number!";
    showMessage("No number!");
    let audio = new Audio("sounds/wrong.mp3");
    audio.play();
  } else if (guessNumber === secretNumber) {
    // document.querySelector(".message").textContent = "Correct Answer";
    showMessage("Correct Answer");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    let audio = new Audio("sounds/win.mp3");
    audio.play();

    if (score > heighScore) {
      heighScore = score;
      document.querySelector(".highscore").textContent = heighScore;
    }
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guessNumber > secretNumber ? "Too heigh" : "Too low";
      // score--;
      showMessage(guessNumber > secretNumber ? "Too heigh" : "Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "You lost the game";
      showMessage("You lost the game");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
      let audio = new Audio("sounds/wrong.mp3");
      audio.play();
    }
  }
});

// } else if (guessNumber > secretNumber) {
//   if (score > 1) {
//     document.querySelector(".message").textContent = "Too heigh";
//     score--;
//     document.querySelector(".score").textContent = score;
//   } else {
//     document.querySelector(".message").textContent = "You lost the game";
//     document.querySelector(".score").textContent = 0;
//     document.querySelector("body").style.backgroundColor = "red";
//     let audio = new Audio('sounds/wrong.mp3');
//     audio.play();
//   }
// } else if (guessNumber < secretNumber) {
//   if (score > 1) {
//     document.querySelector(".message").textContent = "Too low";
//     score--;
//     document.querySelector(".score").textContent = score;
//   } else {
//     document.querySelector(".message").textContent = "You lost the game";
//     document.querySelector(".score").textContent = 0;
//     document.querySelector("body").style.backgroundColor = "red";
//     let audio = new Audio('sounds/wrong.mp3');
//     audio.play();
//   }
// }

//   }
// });

// play Again
document.querySelector(".again").addEventListener("click", function () {
  // resetting score
  score = 20;
  document.querySelector(".score").textContent = score;

  // resetting secretNumber
  secretNumber = Math.floor(Math.random() * 20) + 1;

  // resetting message
  // document.querySelector(".message").textContent = "Start guessing...";
  showMessage("Start guessing...");

  // resetting inputfield
  document.querySelector(".guess").value = "";

  // resetting styles
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
});
