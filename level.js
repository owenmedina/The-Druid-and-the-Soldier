"use strict";

const Level = (function () {
  let currentLevel = 0;
  return function (context, question, answer, choices, gameOver) {
    this.level = currentLevel++;
    this.context = context;
    this.question = question;
    this.answer = answer;
    this.choices = choices;
    this.gameOver = gameOver;
  };
})();

module.exports = Level;
