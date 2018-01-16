// Requiring our CastMember constructor function we exported from castMember.js
var Word = require("./word.js");

var Letter = function(letter, known) {
	// Used for each letter in the current word.
	// Each letter object should either display an underlying character, or a blank placeholder (such as an underscore),
	// depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.

	// What is this letter?
	this.letter = letter;
	// Has the user guessed this letter yet?
	this.known = known;
	// Display the appropriate output
	this.displayLetters = function() {
		// Letters To Display
		var ltd;
		if(this.known) {
			ltd = ltd + this.letter + " ";
		}
		else {
			ltd = ltd + "_ ";
		}
		console.log(ltd);
	}
};

// Export the Word constructor
module.exports = Letter;
