"use strict";

const GameOver = function (option, cod, description) {
  this.option = option;
  this.cod = cod;
  this.description = description;
  this.type = "game-over";
  this.level = -1;
};

export default GameOver;
