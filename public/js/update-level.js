// const ejs = import ;
import GameBrain from "./game-brain.js";

const gb = new GameBrain();
const gameStoryContainer = document.querySelector(".game__story");
const userForm = document.querySelector(".action-form");
const userInput = document.querySelector(".action-form__answer");
const userLevel = document.querySelector(".action-form__level");

function updateStoryContainer() {
  // Get the answer and the level
  const answer = userInput.value;
  const level = (userLevel = userLevel.value);

  // Get the next level
  const nextLevel = gb.progress(level, answer);

  // Get level template or game over depending on nextLevel
  ejs.renderFile(
    `../../views/partials/${
      nextLevel.level ? "levels/level.ejs" : "game-over.ejs"
    }`,
    nextLevel,
    options,
    function (err, htmlString) {
      gameStoryContainer.innerHTML = htmlString;
    }
  );
}

userForm.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent reload
  console.log("default should have been prevented");

  updateStoryContainer();
});
