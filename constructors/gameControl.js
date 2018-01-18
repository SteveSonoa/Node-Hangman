var inquirer = require("inquirer");

var GameControl = function() {
	this.startHard = 5;
	this.startNormal = 7;
	this.startEasy = 9;
	this.guessesLeft = 0;
	this.newGame = function() {
		this.guessesLeft = 9;
	}

	// The user can choose to enter a letter, see the letters, or get a hint
	this.userOptions = function(currentWord) {
		console.log("");
		inquirer.prompt([
		    {
		      type: "list",
		      message: "What would you like to do?",
		      choices: ["Guess a letter", "See the letters I've already used", "Get a hint", "Quit"],
		      name: "choice"
		    }
		]).then(function(answers) {
			if(answers.choice === "Get a hint") {
				if(currentWord.hints === 0) {
					console.log("");
					console.log("Hint #1: " + currentWord.hint1);
					currentWord.hints++;
				}
				else if (currentWord.hints === 1) {
					console.log("");
					console.log("Hint #1: " + currentWord.hint1);
					console.log("Hint #2: " + currentWord.hint2);
					currentWord.hints++
				}
				else {
					console.log("");
					console.log("Hint #1: " + currentWord.hint1);
					console.log("Hint #2: " + currentWord.hint2);
					console.log("Hint #3: " + currentWord.hint3);
				}
			}
			else if(answers.choice === "See the letters I've already used") {
				console.log("");
				if(currentWord.guessedLetters.length > 0) {
					console.log(currentWord.guessedLetters);
				}
				else {
					console.log("You have not made any guesses yet this game.")
				}
			}
			else if(answers.choice === "Quit") {
				console.log("");
				console.log("Thanks for playing!");
				return null;
			}
			else {
				// Complete another inquirer prompt for user input
			}
			currentWord.displayLetters();
		});
	}

	// The user can choose to enter a letter, see the letters, or get a hint
	this.userInput = function() {
		console.log("");
		inquirer.prompt([
		    {
		      message: "Type a letter and press Enter.",
		      name: "input"
		    }
		]).then(function(answers) {
			// if answers.input === "cheat"
				// var found = false
				// var cheatLetter = "";
				// for i < currentWord.letters.length
					// if !found
						// if currentWord.letters[i].known === false
							// cheatLetter = currentWord.letters[i].letter
							// found = true;
				// console.log("Maybe " + cheatLetter + " will help...");
			// else if answers.input.length > 1
				// console.log("Please only type 1 letter.")
			// else
				// checkLetters(answers.input)			
		});
	}

	// User input validation
	this.checkLetters = function(letter) {
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



};

// Export the Word constructor
module.exports = GameControl;
