// dependency for inquirer npm package
var inquirer = require("inquirer");
var randomMovie = require('random-movie');

// requiring our Classroom module exported from classroom.js
var Word = require("./constructors/word.js");

var startHard = 5;
var startNormal = 7;
var startEasy = 9;
var guessesLeft = 0;

var currentWord = new Word();
currentWord.restart();

// The user can choose to enter a letter, see the letters, or get a hint
function userOptions() {
	console.log("");
	inquirer.prompt([
	    {
	      type: "list",
	      message: "What would you like to do?",
	      choices: ["Guess a letter", "See the letter's I've already used", "Get a hint"],
	      name: "choice"
	    }
	]).then(function(answers) {
		// initializes the variable newguy to be a programmer object which will take
		// in all of the user's answers to the questions above
		var teammate = new Player(answers.name, answers.position, answers.offense, answers.defense);
		// printInfo method is run to show that the newguy object was successfully created and filled
		if(numPlayers < 5) {
			teamStarters.push(teammate);
		}
		else {
			teamSubs.push(teammate);
		}

		numPlayers++;
		createPlayer();
	});
}
function checkLetters(letter) {
	var result = false;
	var duplicate = false;
	// If the guessed letter is a letter
	if(letter.toUpperCase().charCodeAt(i) >= 65 && letter.toUpperCase().charCodeAt(i) <= 90) {
		// CHECK TO SEE IF THE LETTER HAS BEEN GUESSED ALREADY
		for (var i = 0; i < currentWord.guessedLetters.length; i++) {
			if(letter.toUpperCase() !== currentWord.guessedLetters[i].toUpperCase()) {
				duplicate = true;
			}
		}

		// If the letter hasn't already been guessed
		if(!duplicate) {
			// Cycle through all Letter objects in the current word
			for (var i = 0; i < currentWord.letters.length; i++) {
				// If the guessed letter matches the cycled letter, mark the "known" indicator to true
				if (letter.toUpperCase() === currentWord.letters[i].toUpperCase()) {
					currentWord.letters[i].known = true;
					// Update result to indicate a correct letter was guessed
					result = true;
				}
			}
			// If a correct letter was guessed, say so
			if (result) {
				console.log("CORRECT!");
			}
			// If a correct letter was not guessed, say so & update guessesLeft
			else {
				gameStats.guessesLeft--;
				console.log("INCORRECT!");
			}
		}

		// If the guessed letter has already been guessed
		else {
			console.log("You have already guessed that letter.");
		}

		// Display the current puzzle state
		currentWord.displayLetters();
	}
	else {
		console.log("Please type a letter.")
	}
}