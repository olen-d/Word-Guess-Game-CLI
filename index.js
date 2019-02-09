//index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:
const word = require("./word");
const letter = require("./letter");
const inquirer = require("inquirer");

let tGuesses = 10;

let wordToGuess = {};

  // Randomly selects a word and uses the `Word` constructor to store it

  // List o' words
  let words = [
    "aberration",
    "acutance",
    "anamorphic",
    "aperture",
    "autofocus",
    "backlight",
    "blur",
    "bokeh",
    "burning",
    "candid",
    "catchlight",
    "contrast",
    "cropping",
    "darkroom",
    "density",
    "diaphragm",
    "diffraction",
    "distortion",
    "dodging",
    "enlarger",
    "exposure",
    "falloff",
    "fisheye",
    "flare",
    "focus",
    "fringing",
    "highlight"
  ]

const wordGame = {

  pickWord() {
    if (words.length > 0) { 
      let wordIndex = Math.floor(Math.random() * words.length);
      wordToGuess = new word(words.splice(wordIndex, 1));
      wordToGuess.createLetters(wordToGuess.word.toString());
      wordToGuess.blanks();
    } else {
      console.log("\n\x1b[32mGood Job! You have guessed all the words.[0m\n");
    }
  },

  getGuess() {
    inquirer
      .prompt ([
        {
        type: "input",
        message: "Guess a letter",
        name: "guess"
        }
      ])
      .then((res) => {
        if (res) {  // TOODO validate this
          wordToGuess.guessResult(res.guess,tGuesses);
          wordToGuess.blanks();
        }
        else {
          //console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
        }
      });
  }
}

wordGame.pickWord();
wordGame.getGuess();
  // Prompts the user for each guess and keeps track of the user's remaining guesses