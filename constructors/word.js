// requiring our Classroom module exported from classroom.js
var Letter = require("./letter.js");
var randomMovie = require('random-movie');
var sillyMessages = require('./sillyMessages.js');
var GameControl = require("./gameControl.js");

var controls = new GameControl();

var Word = function() {
	// Used to create an object representing the current word the user is attempting to guess.
	// This should contain word specific logic and data.
	this.title = "";
	this.hint1 = "";
	this.hint2 = "";
	this.hint3 = "";
	this.hints = 0;
	this.letters = [];
	this.guessedLetters = [];
	// Restarts the game with a new word
	this.restart = function() {
		controls.newGame();
		this.title = "nonsense code";
		this.hints = 0;

		// Discover a random movie title from OMDB
// ******** COMMENT THE NEXT 3 LINES OUT WHILE OFFLINE ********
		randomMovie((err, data) => {
			this.title = data.Title;
			this.hint1 = "This movie released in " + data.Year;
			this.hint2 = "Starring " + data.Actors;
			this.hint3 = data.Plot;
		});

		// begin adding the new word
		this.findNewWord();
	}
	this.findNewWord = function() {
		// If the new title hasn't taken hold yet, wait for it to do so before moving on
		if(this.title === "nonsense code") {
			var rndMsg = Math.floor(Math.random() * sillyMessages.length);
			console.log(sillyMessages[rndMsg]);
			setTimeout(this.findNewWord.bind(this), 1000);
		}
		// When the new title has been updated, move forward
		else {
			this.addLetters();
		}
	}
	// Creates new letter objects & adds them to this object's array
	this.addLetters = function() {
		// empty this.letters
		for (var i = 0; i < this.letters.length; i++) {
			this.letters.splice(0, 1);
		}
		// // empty this.guessedLetters
		for (var j = 0; j < this.guessedLetters.length; j++) {
			this.guessedLetters.splice(0, 1);
		}

		var known = true;
		for (var i = 0; i < this.title.length; i++) {
			// Create a new Letter object for each character in the array (including spaces & punctuation)
			var newLetter = new Letter(this.title.charAt(i), known);

			// if this.title.charAt(i) === a-z or A-Z
			if(this.title.toUpperCase().charCodeAt(i) >= 65 && this.title.toUpperCase().charCodeAt(i) <= 90) {
				// If the character is a-z or A-Z, known = false
				newLetter.known = false;
			}
			// Added all Letter objects into the letters array. This will automatically put them in the proper order.
			this.letters.push(newLetter);
		}
		this.displayLetters();
	}
	// Display the appropriate output
	this.displayLetters = function() {
		// ltd = Letters To Display
		var ltd = "";

		// Go through the letters array
		for (var i = 0; i < this.letters.length; i++) {
			// If a character is known, display it
			if(this.letters[i].known) {
				ltd = ltd + this.letters[i].letter + " ";
			}
			// If a character is unknown, display a blank space
			else {
				ltd = ltd + "_ ";
			}
		}
		console.log("");
		console.log(ltd);
		controls.userOptions(this);
	}
};

// Export the Word constructor
module.exports = Word;
