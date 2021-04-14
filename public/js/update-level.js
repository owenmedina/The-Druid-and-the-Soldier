// const ejs = import ;
import GameBrain from "./game-brain.js";
import { typeParagraphs, typeChoices, playTypeAnimation } from "./typing.js";

const gb = new GameBrain();
const gameStoryContainer = document.querySelector(".game__story");
const userForm = document.querySelector(".action-form");
const userInput = document.querySelector(".action-form__answer");
const userLevel = document.querySelector(".action-form__level");

function clearInput(input = userInput) {
  input.value = "";
  input.focus();
}

async function updateStoryContainer() {
  // Get the answer and the level
  const answer = userInput.value;
  const level = userLevel.value;

  // Clear input
  clearInput();

  // Get the next level
  const nextLevel = gb.progress(level, answer);
  console.log("nextLevel", nextLevel);

  // Send post to server for updated template
  const response = await fetch("/action", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nextLevel),
  });

  // Update page with new data
  const data = await response.text();
  gameStoryContainer.innerHTML = data;
  // Update level
  userLevel.value = nextLevel.level;

  // Typing effect
  const paragraphs = document.querySelectorAll(".type-text");
  console.log("paragraphs", paragraphs);
  const choices = document.querySelectorAll(".choice");

  await typeParagraphs(paragraphs);
  await typeChoices(choices);
}

userForm.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent reload
  //   console.log("default should have been prevented");

  updateStoryContainer();
});
