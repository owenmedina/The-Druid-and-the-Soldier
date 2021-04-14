"use strict";

import Level from "./level.js";
import GameOver from "./game-over.js";

function normalize(answer) {
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
      new GameOver(
        2,
        "mundanity",
        "The two heroes lived plain and normal lives and died peacefully on April 10th, 2100 (what a coincidence)."
      ),
    ]
  ),
  new Level(
    "There once was a druid and a fighter, named Iva and Eown, who were to form the most powerful union in all the land, yet of this they did not know.<br>Though their paths had certainly not few chances to cross, for they attended the same school of the Academy of the Dauntlessly and Magically Unsurpassed or ADMU for short, it was a particular class where their bond was all but inevitable.",
    "What was the title of this class?",
    "Magical Unions, Sacred Clans and Carnality",
    [
      { value: "Allegiance of the Contemporary Mythic", icon: "locate" },
      { value: "Magical Unions, Sacred Clans and Carnality", icon: "locate" },
      { value: "Introduction to Cults", icon: "locate" },
    ],
    [
      new GameOver(
        1,
        "cults",
        `On the way to her home, one evening Iva came across a sacrificial festival for one of the local cults and became one of the unfortunate offerings of the evening. Eown, thinking it an innocent festival of one of his comrades, drowned himself in ales and unknowingly volunteered to be one of the festival's "esteemed guests".`
      ),
      new GameOver(
        3,
        "cults",
        `On the way to her home, one evening Iva came across a sacrificial festival for one of the local cults and became one of the unfortunate offerings of the evening. Eown, thinking it an innocent festival of one of his comrades, drowned himself in ales and unknowingly volunteered to be one of the festival's "esteemed guests".`
      ),
    ]
  ),
  new Level(
    "However, this was not the first time, the two had been a part of the same class at their school. The year prior, they both studied the Western Days of Yore and were even physically close yet romantically, they were not. That time proved too short and untimely for their feelings to have blossomed but it stilled enkindled a flame that soon became an all but consuming fire.<br>In the first days Eown recognized another opportunity to become close to her, he wondered if he would merely continue to admire her beauty from afar. He would often notice her around their scholarly place, walking with such power but also sweetness.",
    "One day, just like all the others, he noticed her with",
    "Her receptacle and the black leather upon her feet",
    [
      {
        value: "Her penguin-like trudge",
        icon: "locate",
      },
      {
        value: "Her spectacles that complimented her beautiful eyes",
        icon: "locate",
      },
      {
        value: "Her receptacle and the black leather upon her feet",
        icon: "locate",
      },
    ],
    [
      new GameOver(
        1,
        "trampling",
        "Possessed by a random rush of courage, he ran up to the girl, calling her name. But she was not Iva and therefore proceeded to trample over Eown until he was dead."
      ),
      new GameOver(
        2,
        "shining",
        "Possessed by a random rush of courage, he ran up to the girl, calling her name. When the lady turned around, not only did Eown realize it was not her but also that the reflection from her spectacles were so bright that it vaporized his eyes."
      ),
    ]
  ),
  new Level(
    "After countless glances, several lectures of such wise teaching from the great paladin Dacanay and much coy disregard from the two heroes, Eown finally asked the lovely druid if she would care to prepare for their test together. Not knowing he meant the practice and study of a telepathic-nature, Iva invited Eown for preparations requiring not only his intellectual presence but his physical presence as well. Eown could barely believe what was going on. He'd thought not of an opportunity to be in her actual presence again. Hence, he did not hesitate.",
    "In which area of the school, did Iva tell Eown to meet her for their preparations?",
    "A den where her elemental clan was gathering",
    [
      { value: "A den where her elemental clan was gathering", icon: "locate" },
      {
        value:
          "A dark forest where creatures were said to unleash their beastly nature",
        icon: "locate",
      },
      {
        value:
          "The base of knowledge where books of different subjects were found",
        icon: "locate",
      },
    ],
    [
      new GameOver(
        2,
        "slaughter",
        "To their surprise, other beasts were present at the time of their meeting and the beasts ravaged both of them to death until they were nothing but beating hearts lying on the forest ground."
      ),
      new GameOver(
        3,
        "philisophical quandry",
        "Iva and Eown stumbled upon a book that questioned every aspect of their existence. Driven to a life of eternal wondering, the two became vegetables (mmmm yummy) to their very last day."
      ),
    ]
  ),
  new Level(
    "At the time and place of their meeting, the two had convened to prepare for their tests. However, not much preparation had occurred in the first couple of hours. The two had spoken about combat, toxins and many other non-sensical things until one of their companions had asked them to vacate the den. Iva asked Eown if he wanted to take their study to a different place. To this Eown responded with an invitation to take her to her place of dwelling for it was on the way to a place he wanted to go to.",
    "What was the place?",
    "The Bakery of Discourse",
    [
      { value: "Flapjack Domicile", icon: "locate" },
      {
        value: "The Bakery of Discourse",
        icon: "locate",
      },
      {
        value: "Walrus Tavern",
        icon: "locate",
      },
    ],
    [
      new GameOver(
        1,
        "unrequited love",
        "Upon arrival at the Flapjack Domicile, Iva was overcome with profound love that she wed the domicile immediately. Eown watched as the girl he fancied fell for something else."
      ),
      new GameOver(
        3,
        "alcoholic poisoning",
        "Thinking liquid courage would help him win the heart of the fair druid, Eown consumed 5 barrels of alcohol at the tavern. Within minutes, he collapsed and died."
      ),
    ]
  ),
  new Level(
    "After that day of preparation, the two felt closer and more comfortable with each other. They had begun to speak to each other even when they were apart. They were even exchanging banter and being playful with one another.",
    "What playful trick would Eown play on Iva every time she would come to their class?",
    "Tripping her leg",
    [
      { value: "Tugging on her hair", icon: "locate" },
      {
        value: "Spitting on her",
        icon: "locate",
      },
      {
        value: "Tripping her leg",
        icon: "locate",
      },
    ],
    [
      new GameOver(
        1,
        "skinning",
        "One day, lost in the fun they were having, Eown erroneously tugged on Iva's hair a bit too strongly, consequently skinning her scalp and exposing her insides. Iva tragically bled out."
      ),
      new GameOver(
        2,
        "embarrassment",
        "Since Eown grew up jokingly doing it to his siblings, he thought it ok to the same to Iva. To no surprise, she was caught off guard when he did it and Eown realized the potential inappropriateness of the trick."
      ),
    ]
  ),
  new Level(
    "On that day of their preparation, Eown had casually mentioned a show that the two might have been interested in. It in fact was a series of shows where worthy individuals planned and fought tirelessly against each other to sit at the throne of the kingdom. Iva had agreed yet a final date had not been decided. Eventually they had decided to see it on the 6th day of the week after Iva finished helping out at the local shop where they sold household commodities.<br>That afternoon, Eown met Iva and they rode together on his horse. They then saw the show with all its violence, trickery and carnality.",
    "What did they purchase for their time watching the show?",
    "Joyeous Lemon",
    [
      { value: "Cooked Poultry of Kentucky", icon: "locate" },
      {
        value: "Joyeous Lemon",
        icon: "locate",
      },
      {
        value: "Hummus and pita",
        icon: "locate",
      },
    ],
    [
      new GameOver(
        1,
        "Black Death",
        "Not realizing one of the pieces of poultry was actually a rat with bacillus, Eown and Iva became the first known people to have died during the Black Death."
      ),
      new GameOver(
        3,
        "chickpea",
        "Lacking the fine groundwork of a pestle, Iva unknowingly swallowed a chickpea and choked to death."
      ),
    ]
  ),
  new Level(
    "Later that evening there was to be a festival for a member of Eown's clan and his kindred had invited Iva to partake in the festivities. She had asked her mother who agreed to let her stay. She met Eown's clan and played some games with them. All the while, Eown was getting blind drunk to prove his alcoholic tolerance and prowess to Iva. To his dismay, the alcohol had taken the man and he began to show his true intentions. Being as kind as she was, Iva had decided to stay longer than she had intended to see to it that he was ok.",
    "At what time did Iva leave the party?",
    "Hours before the crack of dawn",
    [
      { value: "Hours before the crack of dawn", icon: "locate" },
      {
        value: "Hours before the stroke of midnight",
        icon: "locate",
      },
      {
        value: "Midnight (wiw cindarella)",
        icon: "locate",
      },
    ],
    [
      new GameOver(
        2,
        "fomo",
        "Being denied by her mother, Iva had returned to their home early that evening. Thinking of what could have happened, Iva froze in a moment of longing, forever stuck in the uncertainty of what might have been."
      ),
      new GameOver(
        3,
        "bottle instead of slipper",
        "Iva was permitted to stay on the condition that she left at midnight. So at the stroke of midnight, Iva bid Owen adieu. Still being intoxicated, Owen came over to bid her farewell when he fell on a glass bottle."
      ),
    ]
  ),
  new Level(
    "About a week following the festival, Iva confessed to Eown of her feelings after he had asked to hold her hand. They became entwined, speaking and seeing each other as they could. And after several breathtaking days of seeing each other, Iva asked Eown to see a play with him.",
    "What was the play about?",
    "A child that transforms into a magical hero at the shout of a word",
    [
      {
        value:
          "A child that transforms into a magical hero at the shout of a word",
        icon: "locate",
      },
      {
        value: "A warrior from an alien planet that saves Earth",
        icon: "locate",
      },
      {
        value: "An elephant that could fly",
        icon: "locate",
      },
    ],
    [
      new GameOver(
        2,
        "punctuality",
        "After Eown runs late to their scheduled date, Iva realizes he is not coming and offers his seat to another person. Iva gets along with this person and soon forgets she even met Eown."
      ),
      new GameOver(
        3,
        "elephant",
        "Iva and Eown gazed as they watched the soaring elephant. Eown was so drawn to the spectacle that he drew closer to the elephant not knowing this was where the elephant was to land. And so it did, squashing Eown to death."
      ),
    ]
  ),
  new Level(
    `Underwhelmed by the show but overwhelmed by the growth of their relationship, Iva and Eown returned to Iva's dwelling where they ravenously kissed each other. They grabbed at each other, touched each other and were entranced in their own lips.<br><br><br><br>Driven to such passionate and strong feelings, Eown asked Iva "Will you be mine?"`,
    "To which, Iva replied",
    "If you want me, you have me",
    [
      { value: "Fuck no", icon: "locate" },
      {
        value: "If you want me, you have me",
        icon: "love",
      },
      {
        value: "No ty",
        icon: "locate",
      },
    ],
    [
      new GameOver(
        1,
        "heartache",
        "Eown's heart breaks after being denied by Iva but he respects her decision."
      ),
      new GameOver(
        3,
        "heartache",
        "Eown's heart breaks after being denied by Iva but he respects her decision."
      ),
    ]
  ),
];
GameBrain.prototype.win = {
  type: "win",
  greeting: "Happy Anniversary bubu!",
  body:
    "I know it’s not the perfect anniversary but I hope you enjoyed the gift and our day as much as I did (yes I am writing this in the past tense haha). I’m sorry about that talk we had. Well I’m sorry that you know we’re going through this. But I love you so much and I’m so happy you wanna keep on trying and that you want to help. I love you so much baby. Hopefully the added time will help me cope with it better and hopefully we’ll get to see each other soon so that we can have more happy days.<br>You make me so happy. Thank you for being here.",
  closing: "Love",
  signature: "Owen (krokak)",
  ps:
    "There be money waiting for you in your account so you can order from the Flapjack Domicile 😜 Late anniversary gift and early end of the quarter gift. I’m so proud of you 😚<br>I love you baby happy anniversary ♥️",
  playAgain: "Enter anything to play again",
  level: GameBrain.prototype.levels.length,
};
GameBrain.prototype.progress = function (level, answer) {
  const gameOverLevel = "-1";
  const levels = GameBrain.prototype.levels;
  const restartGameOver =
    level === gameOverLevel && normalize(answer) === "awwyiiis";
  const answerByOption = parseInt(answer);
  const answerIsCorrect =
    restartGameOver ||
    (level < levels.length &&
      (normalize(levels[level].answer) === normalize(answer) ||
        (answerByOption &&
          levels[level].choices[answerByOption - 1].value ===
            levels[level].answer)));
  if (level === levels.length) {
    GameBrain.prototype.currentLevel = 0;
    return levels[GameBrain.prototype.currentLevel];
  }
  if (level === levels.length - 1 && answerIsCorrect)
    return GameBrain.prototype.win;
  if (answerIsCorrect) return levels[++GameBrain.prototype.currentLevel]; // next level

  const chosenOption = answerByOption
    ? answerByOption
    : checkOptionNumber(levels[level].choices, answer);
  console.log("chosenOption", chosenOption);
  const gameOverArray = levels[level].gameOver;

  GameBrain.prototype.currentLevel = -1;
  return gameOverArray.find((go) => go.option === chosenOption);
};

export default GameBrain;
// module.exports = GameBrain;
