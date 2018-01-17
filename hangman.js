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

// function checkLetters(letter) {
// 	var result = false;
// 	// If the guessed letter is a letter
// 	if(letter.toUpperCase().charCodeAt(i) >= 65 && letter.toUpperCase().charCodeAt(i) <= 90) {
// 		// CHECK TO SEE IF THE LETTER HAS BEEN GUESSED ALREADY

// 		// Cycle through all Letter objects in the current word
// 		for (var i = 0; i < currentWord.letters.length; i++) {
// 			// If the guessed letter matches the cycled letter, mark the "known" indicator to true
// 			if (letter.toUpperCase() === currentWord.letters[i].toUpperCase()) {
// 				currentWord.letters[i].known = true;
// 				// Update result to indicate a correct letter was guessed
// 				result = true;
// 			}
// 		}
// 		// If a correct letter was guessed, say so
// 		if (result) {
// 			console.log("CORRECT!");
// 		}
// 		// If a correct letter was not guessed, say so & update guessesLeft
// 		else {
// 			gameStats.guessesLeft--;
// 			console.log("INCORRECT!");
// 		}
// 		// Display the puzzle state so far
// 		for (var i = 0; i < currentWord.letters.length; i++) {
// 			currentWord.letters[i].displayLetters()
// 		}
// 	}
// 	else {
// 		console.log("Please type a letter.")
// 	}
// }

// // currentWord.findNewWord();
// // currentWord.displayLetters();