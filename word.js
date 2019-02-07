const letter = require("./letter");

let letters = [];
let letterObjs = [];
let lettersStr = [];

module.exports = Word;
function Word(w) {
    // An array of `new` Letter objects representing the letters of the underlying word
    this.word = w;

    this.createLetters = function(w) {
        let iterator = w[Symbol.iterator]();
        let char = iterator.next();

        while(!char.done && char !== " ") {
            letters.push(char.value);
            letterObjs.push(new letter(char.value)); 
            char = iterator.next();
        }
        //console.log(letters.indexOf("b"));
        //console.log(letterObjs[letters.indexOf("b")]);
       // console.log(letterObjs);
    };

    // A function that returns a string representing the word. This should call the function on each letter object 
    // (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
    this.blanks = function() {
        letters.forEach((e) => {
            lettersStr.push(letterObjs[letters.indexOf(e)].toString(e));
            //console.log("--", lettersStr);
        });
        let blanksStr = lettersStr.join(" ");
        console.log(blanksStr);
    };
    
    // A function that takes a character as an argument and calls the guess function on each letter object (the second function 
    // defined in `Letter.js`)
    this.guessResult = function(c) {
        letters.forEach((e) => {
            letterObjs[letters.indexOf(e)].checkChar(c);
        });
    }
}
  
   

   




const w1 = new Word ("Cheeseburger");
console.log(w1.word);

w1.createLetters(w1.word);
w1.blanks();
w1.guessResult("h");
w1.blanks();