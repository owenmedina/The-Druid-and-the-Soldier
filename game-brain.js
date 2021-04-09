"use strict";

const _ = require("lodash");
const path = require("path");
const Level = require(path.join(__dirname, "level.js"));

function normalize(answer) {
  return _.lowerCase(answer);
}

function GameBrain() {}

GameBrain.prototype.currentLevel = 0;
GameBrain.prototype.levels = [
  new Level(
    "There once was a mage and a soldier who were to form the most powerful union in all the land, yet of this they did not know.<br>Though their paths had certainly not few chances to cross, for they attended the same school of the Academy of the Dauntlessly and Magically Unsurpassed or ADMU for short, it was a particular class where their bond was all but inevitable.",
    "What was the title of this class?",
    "Magical Unions, Sacred Clans and Carnal Knowledge",
    [
      "Allegiance of the Contemporary Mythic",
      "Magical Unions, Sacred Clans and Carnal Knowledge",
      "Introduction to Cults",
    ]
  ),
];
GameBrain.prototype.progress = function (level, answer) {
  if (normalize(levelUpAnswers[currentLevel]) === normalize(answer)) {
    currentLevel++;
    //   return {context: context[]}
  }
};

module.exports = GameBrain;
