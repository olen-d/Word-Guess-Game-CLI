let tGuesses = 99;

function Letter(c) {
    this.char = c;
    this.guessed = false;

    this.output = function () {
        return (this.guessed ? this.char + " " : "_ ");
    };

    this.checkChar = function (guess) {
        if(guess === this.char) {
            this.guessed = true;
            console.log(this.output());
        } else {
            console.log(this.output());
            tGuesses--;
        }
    }
}

const l1 = new Letter ("q");
l1.checkChar("q");