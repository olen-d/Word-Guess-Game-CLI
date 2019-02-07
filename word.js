let letters = [];

function Word(w) {
    // An array of `new` Letter objects representing the letters of the underlying word
    this.word = w;

    this.createLetters = function(w) {
        let iterator = w[Symbol.iterator]();
        let char = iterator.next();

        while(!char.done && char !== " ") {
            letters.push(char.value);
            char = iterator.next();
        }
    }

    // A function that returns a string representing the word. This should call the function on each letter object 
    // (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
  
    // A function that takes a character as an argument and calls the guess function on each letter object (the second function 
    // defined in `Letter.js`)
}

const w1 = new Word ("Cheeseburger");
console.log(w1.word);

w1.createLetters(w1.word);