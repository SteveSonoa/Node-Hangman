// requiring our Classroom module exported from classroom.js
var Letter = require("./letter.js");

var Word = function() {
	// Used to create an object representing the current word the user is attempting to guess.
	// This should contain word specific logic and data.
	this.title = "";
	this.letters = [];
	this.guessedLetters = [];
	// Restarts the game with a new word
	this.findNewWord = function() {
		// empty this.letters
		this.letters.splice(0, this.letters.length);
		// empty this.guessedLetters
		this.guessedLetters.splice(0, this.guessedLetters.length);
		// Select a random movie title from OMDB
		var movieTitle = "Return of the Jedi";
		// this.title = OMDB movie title
		this.title = movieTitle;
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
};

// Export the Word constructor
module.exports = Word;
