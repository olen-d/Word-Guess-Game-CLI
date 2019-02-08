//index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:
const word = require("./word");
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
      const wordToGuess = new word(words.splice(wordIndex, 1));
      console.log(wordToGuess);
      console.log(wordToGuess.word);
      wordToGuess.createLetters(wordToGuess.word.toString());
      wordToGuess.blanks();
    } else {
      // Run final congratulations screen
    }
  }
}

wordGame.pickWord();
  // Prompts the user for each guess and keeps track of the user's remaining guesses