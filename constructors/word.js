// requiring our Classroom module exported from classroom.js
var Letter = require("./letter.js");
var randomMovie = require('random-movie');

// Create a temporary title
var newTitle;

var Word = function() {
	// Used to create an object representing the current word the user is attempting to guess.
	// This should contain word specific logic and data.
	this.title = "";
	this.letters = [];
	this.guessedLetters = [];
	// Restarts the game with a new word
	this.restart = function() {
		newTitle = "Return Of The Jedi";

		// Discover a random movie title from OMDB
		randomMovie(function(err, data) {
			newTitle = data.Title;
		});

		// begin adding the new word
		this.findNewWord();
	}
	this.findNewWord = function() {
		// If the new title hasn't taken hold yet, wait for it to do so before moving on
		if(newTitle === "Return Of The Jedi") {
			console.log("Waiting...");
			setTimeout(this.findNewWord, 500);
		}
		// When the new title has been updated, move forward
		else {
			// empty this.letters
			for (var i = 0; i < this.letters.length; i++) {
				this.letters.splice(0, 1);
			}
			// // empty this.guessedLetters
			// this.guessedLetters.splice(0, this.guessedLetters.length);
			this.title = newTitle;

			console.log(this.title);
		}
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
