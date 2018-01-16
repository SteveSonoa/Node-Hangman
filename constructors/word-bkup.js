// requiring our Classroom module exported from classroom.js
var Letter = require("./letter.js");
var randomMovie = require('random-movie');

var Word = function(title) {
	// Used to create an object representing the current word the user is attempting to guess.
	// This should contain word specific logic and data.
	this.title = title;
	this.letters = [];
	this.guessedLetters = [];
	// Restarts the game with a new word
	this.findNewWord = function() {
		// empty this.letters
		this.letters.splice(0, this.letters.length);
		// empty this.guessedLetters
		this.guessedLetters.splice(0, this.guessedLetters.length);
		this.addLetters();
	}
	// Creates new letter objects & adds them to this object's array
	this.addLetters = function() {
		var known = true
		for (var i = 0; i < this.title.length; i++) {
			// if this.title.charAt(i) === a-z or A-Z
			if(this.title.toUpperCase().charCodeAt(i) >= 65 && this.title.toUpperCase().charCodeAt(i) <= 90) {
				// If the character is a-z or A-Z, known = false
				this.known = false;
			}
			// Create a new Letter object for each character in the array (including spaces & punctuation)
			var newLetter = new Letter(this.title.charAt(i), this.known);
			// Added all Letter objects into the letters array. This will automatically put them in the proper order.
			this.letters.push(newLetter);
		}
	}
	// Display the appropriate output
	this.displayLetters = function() {
		// ltd = Letters To Display
		var ltd;
		for (var i = 0; i < this.letters.length; i++) {
			if(this.letters[i].known) {
				ltd = ltd + this.letters[i].letter + " ";
			}
			else {
				ltd = ltd + "_ ";
			}
		}
		console.log(ltd);
	}
};

// Export the Word constructor
module.exports = Word;
