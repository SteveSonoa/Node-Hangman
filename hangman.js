// dependency for inquirer npm package
var inquirer = require("inquirer");
var randomMovie = require('random-movie');

// requiring our Word constructor exported from word.js
var Word = require("./constructors/word.js");

var currentWord = new Word();

currentWord.restart();

