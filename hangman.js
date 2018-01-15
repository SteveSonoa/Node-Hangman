// dependency for inquirer npm package
var inquirer = require("inquirer");

// requiring our Classroom module exported from classroom.js
var Word = require("./constructors/word.js");

var gameStats = {
	startHard = 5,
	startNormal = 7,
	startEasy = 9,
	guessesLeft = 0
};

var currentWord = new Word();
currentWord.findNewWord();

function checkLetters(letter) {
	// var result = false
	// if letter is a letter
		// for i < Word.letters.length
			// if letter.toUpper() === Word.letters[i].toUpper()
				// Word.letters[i].known = true
				// result = true
		// if (result)
			// console.log("CORRECT!")
		// else
			// playerStats.guessesLeft--;
			// console.log("INCORRECT!")
		// for i < Word.letters.length
			// Word.letters[i].displayLetters()
	// else
		// console.log("Please type a letter.")
}