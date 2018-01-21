var inquirer = require("inquirer");

var GameControl = function() {
	this.startHard = 5;
	this.startNormal = 7;
	this.startEasy = 9;
	this.guessesLeft = 0;
	this.hintsUsed = 0;
	this.newGame = function() {
		this.guessesLeft = 9;
		this.hintsUsed = 0;
	}

	// The user can choose to enter a letter, see the letters, or get a hint. Both currentWord and controls are passed.
	this.userOptions = function(currentWord, controls) {
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
				controls.displayLogo();

				if(controls.hintsUsed === 0) {
					console.log("\nHint #1: " + currentWord.hint1);
					controls.hintsUsed++;
				}
				else if (controls.hintsUsed === 1) {
					console.log("\nHint #1: " + currentWord.hint1);
					console.log("Hint #2: " + currentWord.hint2);
					controls.hintsUsed++
				}
				else {
					console.log("\nHint #1: " + currentWord.hint1);
					console.log("Hint #2: " + currentWord.hint2);
					console.log("Hint #3: " + currentWord.hint3);
				}
				currentWord.displayLetters();
			}
			else if(answers.choice === "See the letters I've already used") {
				controls.displayLogo();

				console.log("");
				if(currentWord.guessedLetters.length > 0) {
					var sortedLetters = currentWord.guessedLetters.sort();
					var lettersList = "";
					for (var i = 0; i < sortedLetters.length; i++) {
						lettersList = lettersList + sortedLetters[i] + " ";
					}
					// The display will automatically add commas between letters in the array
					console.log(lettersList);
				}
				else {
					console.log("You have not made any guesses yet this game.")
				}
				currentWord.displayLetters();
			}
			else if(answers.choice === "Quit") {
				console.log("\nThanks for playing!");
				return null;
			}
			else {
				// Complete another inquirer prompt for user input. Pass along the controls object.
				controls.userInput(currentWord, controls);
			}
		});
	}

	// Input validation and updating the puzzle
	this.userInput = function(currentWord, controls) {
		console.log("");
		inquirer.prompt([
			{
				message: "Type a letter and press Enter.",
				name: "input"
			}
		]).then(function(answers) {
			controls.displayLogo();

			if(answers.input === "cheat") {
				var found = false
				var cheatLetter = "";
				for (var i = 0; i < currentWord.letters.length; i++) {
					if(!found) {
						if(currentWord.letters[i].known === false) {
							cheatLetter = currentWord.letters[i].letter;
							found = true;
						}
					}
				}
				console.log("\nMaybe " + cheatLetter.toUpperCase() + " will help...");
			}
			else if (answers.input.length > 1) {
				console.log("\nPlease only type 1 letter.");

			}
			else {
				controls.checkLetters(answers.input, currentWord, controls);
			}

			// See what happens next
			controls.nextSteps(currentWord, controls);
		});
	}

	// User input validation
	this.checkLetters = function(letter, currentWord, controls) {
		var result = false;
		var duplicate = false;
		// If the guessed letter is a letter
		if(letter.toUpperCase().charCodeAt(i) >= 65 && letter.toUpperCase().charCodeAt(i) <= 90) {
			// CHECK TO SEE IF THE LETTER HAS BEEN GUESSED ALREADY
			for (var i = 0; i < currentWord.guessedLetters.length; i++) {
				if(letter.toUpperCase() === currentWord.guessedLetters[i].toUpperCase()) {
					duplicate = true;
				}
			}

			// If the letter hasn't already been guessed
			if(!duplicate) {
				// Add the guessed letter to the guessedLetters array
				currentWord.guessedLetters.push(letter.toUpperCase());

				// Cycle through all Letter objects in the current word
				for (var i = 0; i < currentWord.letters.length; i++) {
					// If the guessed letter matches the cycled letter, mark the "known" indicator to true
					if (letter.toUpperCase() === currentWord.letters[i].letter.toUpperCase()) {
						currentWord.letters[i].known = true;
						// Update result to indicate a correct letter was guessed
						result = true;
					}
				}

				// If a correct letter was guessed, say so
				if (result) {
					console.log("\nCORRECT!");
				}

				// If an incorrect letter was guessed, say so & update guessesLeft
				else {
					controls.guessesLeft--;
					console.log("\nINCORRECT!");
				}
			}

			// If the guessed letter has already been guessed
			else {
				console.log("\nYou have already guessed that letter.");
			}
		}
		else {
			console.log("\nPlease type a letter.")
		}
	}

	// Checks the game status to see if there are guesses remaining, if there are any blanks remaining, and what to do next
	this.nextSteps = function(currentWord, controls) {
		// Check to see if the user has any guesses remaining.
		if(controls.guessesLeft > 0) {
			var winner = true;
			// Check to see if there are any letters still unknown
			for (var i = 0; i < currentWord.letters.length; i++) {
				if(currentWord.letters[i].known === false) {
					winner = false;
				}
			}
			if(winner) {
				console.log("YOU WIN!!!");
				controls.playAgain(currentWord, controls);
			}
			else {
				// Display the current puzzle state
				currentWord.displayLetters();
			}
		}
		// If there are no guesses remaining
		else {
			console.log("GAME OVER!");
			controls.playAgain(currentWord, controls);
		}
	}

	this.playAgain = function(currentWord, controls) {
		inquirer.prompt([
			{
				type: "confirm",
				message: "Play again?",
				name: "again",
				default: true
			}
		]).then(function(answers) {
			if(answers.again) {
				currentWord.restart();
			}
			else {
				console.log("\nThanks for playing!");
				return null;
			}
		});
	}
	this.displayLogo = function() {
		console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
		console.log("  _   _      _      _   _     ____    __  __      _      _   _     ");
		console.log(" |'| |'| U  /\"\\  u | \\ |\"| U /\"___|uU|' \\/ '|uU  /\"\\  u | \\ |\"|    ");
		console.log("/| |_| |\\ \\/ _ \\/ <|  \\| |>\\| |  _ /\\| |\\/| |/ \\/ _ \\/ <|  \\| |>   ");
		console.log("U|  _  |u / ___ \\ U| |\\  |u | |_| |  | |  | |  / ___ \\ U| |\\  |u   ");
		console.log(" |_| |_| /_/   \\_\\ |_| \\_|   \\____|  |_|  |_| /_/   \\_\\ |_| \\_|    ");
		console.log(" //   \\\\  \\\\    >> ||   \\\\,-._)(|_  <<,-,,-.   \\\\    >> ||   \\\\,-. ");
		console.log("(_\") (\"_)(__)  (__)(_\")  (_/(__)__)  (./  \\.) (__)  (__)(_\")  (_/ ");
		console.log("\n\n\n");
	}
};

// Export the Word constructor
module.exports = GameControl;
