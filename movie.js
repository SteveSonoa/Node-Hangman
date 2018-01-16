var randomMovie = require('random-movie');

randomMovie(function(err, data) {
	console.log(data.Title);
});