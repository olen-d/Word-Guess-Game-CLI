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
        } 
    };
}