const letter = require("./letter");

let letters = [];
let letterObjs = [];
let lettersStr = [];
let matches = [];

module.exports = Word

function Word(w) {
    // An array of `new` Letter objects representing the letters of the underlying word
    this.word = w;
    this.guessed = false;

    this.createLetters = function(w) {
        let iterator = w[Symbol.iterator]();
        let char = iterator.next();

        while(!char.done && char !== " ") {
            letters.push(char.value);
            letterObjs.push(new letter(char.value)); 
            char = iterator.next();
        }
    };

    // A function that returns a string representing the word. This should call the function on each letter object 
    // (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
    this.blanks = function() {
        lettersStr.length = 0;
        letters.forEach((e) => {
            lettersStr.push(letterObjs[letters.indexOf(e)].displayLetter(e));
            
        });
        let blanksStr = lettersStr.join(" ");
        console.log(blanksStr);
    };
    
    // A function that takes a character as an argument and calls the guess function on each letter object (the second function 
    // defined in `Letter.js`)
    this.guessResult = function(c, tGuesses) {
        matches.length = 0;
        letters.forEach((e) => {
           letterObjs[letters.indexOf(e)].checkChar(c);
           if(letterObjs[letters.indexOf(e)].guessed) {
                matches.push(true);
            } else {
                matches.push(false);
            }
           });
        if (matches.findIndex(k => k=== true) > -1) {
            console.log("\n\x1b[32mCorrect!\x1b[0m\n");
            if(matches.findIndex(l => l === false) === -1) {
                this.guessed = true;
                console.log("\n\x1b[32mGood Job! You guessed the word.\x1b[0m\n");
            }
        } else {
            console.log("\n\x1b[31mWrong Answer!\x1b[0m\n");
        }
    }

    this.reset = function() {
        letters.length = 0;
        letterObjs.length = 0;
        lettersStr.length = 0;
        matches.length = 0;
    }
}