var GameControl = function() {
	this.startHard = 5;
	this.startNormal = 7;
	this.startEasy = 9;
	this.guessesLeft = 0;
	this.hints = 0;
	this.newGame = function() {
		this.guessesLeft = 9;
		this.hints = 0;
	}
};

// Export the Word constructor
module.exports = GameControl;
