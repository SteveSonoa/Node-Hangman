var Letter = function(letter, known) {
	// Used for each letter in the current word.
	// Each letter object should either display an underlying character, or a blank placeholder (such as an underscore),
	// depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.

	// What is this letter?
	this.letter = letter;
	// Has the user guessed this letter yet?
	this.known = known;

};

// Export the Word constructor
module.exports = Letter;
