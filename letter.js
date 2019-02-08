let tGuesses = 99;

module.exports = Letter;

function Letter(c) {
    this.char = c;
    this.guessed = false;

    this.displayLetter = function (char) {
        return (this.guessed ? this.char + " " : "_ ");
    };

    this.checkChar = function (guess) {
        if(guess === this.char) {
            this.guessed = true;
        } else {
            tGuesses--;
        }
    }
}



const l1 = new Letter ("q");
l1.checkChar("q");