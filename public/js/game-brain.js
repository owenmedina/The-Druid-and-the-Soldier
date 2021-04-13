"use strict";

import Level from "./level.js";

function normalize(answer) {
  console.log("normalize input", answer);
  return answer.toLowerCase();
}

function checkOptionNumber(choices, answer) {
  return (
    choices.findIndex(
      (currAns) => normalize(currAns.value) === normalize(answer)
    ) + 1
  );
}

function GameBrain() {}

GameBrain.prototype.currentLevel = 0;
GameBrain.prototype.levels = [
  new Level(
    "This is a text-based game that tells the story of two heroes that formed an unlikely but great pair. Your mission is to make decisions in the game to guide the two heroes to the secret treasure! <br> Instructions: To choose one of the options, type in the option or its number into the input line.",
    "Would you like to play?",
    "YES!",
    [
      { value: "YES!", icon: "fight" },
      { value: "No, thanks", icon: "flag" },
    ],
    [
      {
        option: 2,
        cod: "mundanity",
        description:
          "The two heroes lived plain and normal lives and died peacefully on April 10th, 2100 (what a coincidence).",
      },
    ]
  ),
  new Level(
    "There once was a druid and a fighter, named Iva and Eown, who were to form the most powerful union in all the land, yet of this they did not know.<br>Though their paths had certainly not few chances to cross, for they attended the same school of the Academy of the Dauntlessly and Magically Unsurpassed or ADMU for short, it was a particular class where their bond was all but inevitable.",
    "What was the title of this class?",
    "Magical Unions, Sacred Clans and Carnality",
    [
      { value: "Allegiance of the Contemporary Mythic", icon: "" },
      { value: "Magical Unions, Sacred Clans and Carnality", icon: "" },
      { value: "Introduction to Cults", icon: "" },
    ],
    [
      {
        option: 1,
        cod: "cults",
        description: `On the way to her home, one evening Iva came across a sacrificial festival for one of the local cults and became one of the unfortunate offerings of the evening. Eown, thinking it an innocent festival of one of his comrades, drowned himself in ales and unknowingly volunteered to be one of the festival's "esteemed guests".`,
      },
      {
        option: 3,
        cod: "cults",
        description: `On the way to her home, one evening Iva came across a sacrificial festival for one of the local cults and became one of the unfortunate offerings of the evening. Eown, thinking it an innocent festival of one of his comrades, drowned himself in ales and unknowingly volunteered to be one of the festival's "esteemed guests".`,
      },
    ]
  ),
  new Level(
    "True, it was that Iva and Eown were to meet in that class of unions, clans and carnality. After several lectures of such wise teaching from the great paladin Dacanay and much coy disregard from the two heroes, Eown asked the lovely druid if she would care to prepare for their test together. Not knowing he meant practice and study of a telepathic-nature, Iva invited Eown for preparations requiring not only his intellectual presence but his physical presence as well. Eown could barely believe what was going on. He'd thought not of an opportunity to be in her actual presence again. Hence, he did not hesitate.",
    "In which area of the school, did Iva tell Eown to meet her for their preparations?",
    "A den where her elemental clan was gathering",
    [
      { value: "A den where her elemental clan was gathering", icon: "" },
      {
        value:
          "A dark forest where creatures were said to unleash their beastly nature",
        icon: "",
      },
      {
        value:
          "The base of knowledge where books of different subjects were found",
        icon: "",
      },
    ],
    [
      {
        option: 2,
        cod: "slaughter",
        description:
          "To their surprise, other beasts were present at the time of their meeting and the beasts ravaged both of them to death until they were nothing but beating hearts lying on the forest ground.",
      },
      {
        option: 3,
        cod: "philisophical quandry",
        description:
          "Iva and Eown stumbled upon a book that questioned every aspect of their existence. Driven to a life of eternal wondering, the two became vegetables (mmmm yummy) to their very last day.",
      },
    ]
  ),
];
GameBrain.prototype.progress = function (level, answer) {
  const gameOverLevel = "-1";
  if (
    (level === gameOverLevel && normalize(answer) === "awwyiiis") ||
    normalize(
      GameBrain.prototype.levels[GameBrain.prototype.currentLevel].answer
    ) === normalize(answer)
  ) {
    return GameBrain.prototype.levels[++GameBrain.prototype.currentLevel];
  } else {
    const chosenOption = checkOptionNumber(
      GameBrain.prototype.levels[GameBrain.prototype.currentLevel].choices,
      answer
    );
    const gameOverArray =
      GameBrain.prototype.levels[GameBrain.prototype.currentLevel].gameOver;

    GameBrain.prototype.currentLevel = -1;
    return gameOverArray.find((go) => go.option === chosenOption);
  }
};

export default GameBrain;
// module.exports = GameBrain;
