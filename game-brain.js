"use strict";

const _ = require("lodash");
const path = require("path");
const Level = require(path.join(__dirname, "level.js"));

function normalize(answer) {
  console.log("normalize input", answer);
  return _.lowerCase(answer);
}

function GameBrain() {}

GameBrain.prototype.currentLevel = 0;
GameBrain.prototype.levels = [
  new Level(
    "This is a text-based game that tells the story of two heroes that formed an unlikely but great pair. Your mission is to make decisions in the game to guide the two heroes to the secret treasure! <br /> Instructions: To choose one of the options, type in the option or its number into the input line.",
    "Would you like to play?",
    "YES!",
    [
      { value: "YES!", icon: "fight" },
      { value: "No, thanks", icon: "flag" },
    ],
    {
      cod: "mundanity",
      description:
        "The two heroes lived plain and normal lives and died peacefully on April 10th, 2100 (what a coincidence).",
    }
  ),
  new Level(
    "There once was a mage and a soldier who were to form the most powerful union in all the land, yet of this they did not know.<br>Though their paths had certainly not few chances to cross, for they attended the same school of the Academy of the Dauntlessly and Magically Unsurpassed or ADMU for short, it was a particular class where their bond was all but inevitable.",
    "What was the title of this class?",
    "Magical Unions, Sacred Clans and Carnality",
    [
      { value: "Allegiance of the Contemporary Mythic", icon: "" },
      { value: "Magical Unions, Sacred Clans and Carnality", icon: "" },
      { value: "Introduction to Cults", icon: "" },
    ],
    "Wawa"
  ),
];
GameBrain.prototype.progress = function (level, answer) {
  if (
    normalize(
      GameBrain.prototype.levels[GameBrain.prototype.currentLevel].answer
    ) === normalize(answer)
  ) {
    return GameBrain.prototype.levels[++GameBrain.prototype.currentLevel];
  } else {
    return GameBrain.prototype.levels[GameBrain.prototype.currentLevel]
      .gameOver;
  }
};

module.exports = GameBrain;
