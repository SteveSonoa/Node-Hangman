'use strict';
var movie = require('node-movie').getByID;
var ids = require("./id.json");
var rand = require('unique-random')(0,ids.length);

module.exports = function again(cb){
	var randNum = rand();
	var randID = ids[randNum];
	movie(randID, function(err, data) {
		cb(err, data);
	});
};
