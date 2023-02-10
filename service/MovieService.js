'use strict';

var sql = require('../utils/db.js');
var utils = require('../utils/writer.js');

/**
 * Deletes a Movie by its ID
 * Deletes a movie by ID
 *
 * id Integer ID of the movie to delete
 * returns movie
 **/
exports.deleteMovieById = function (id) {
	return new Promise(function (resolve, reject) {
		var examples = {};
		examples['application/json'] = {
			"studio": {
				"name": "Warner Bros",
				"id": 1
			},
			"country": "USA",
			"releaseDate": "1999",
			"director": {
				"name": "David Fincher",
				"id": 6
			},
			"pgRate": 16,
			"length": 138,
			"rating": 5,
			"id": 0,
			"title": "Fight Club"
		};
		if (Object.keys(examples).length > 0) {
			resolve(examples[Object.keys(examples)[0]]);
		} else {
			resolve();
		}
	});
}


/**
 * Insert a new Movie
 *
 * body Movie Insert a new Movie
 * returns List
 **/
exports.insertMovie = function (body) {
	return new Promise(function (resolve, reject) {
		var examples = {};
		examples['application/json'] = [{
			"studio": {
				"name": "Warner Bros",
				"id": 1
			},
			"country": "USA",
			"releaseDate": "1999",
			"director": {
				"name": "David Fincher",
				"id": 6
			},
			"pgRate": 16,
			"length": 138,
			"rating": 5,
			"id": 0,
			"title": "Fight Club"
		}, {
			"studio": {
				"name": "Warner Bros",
				"id": 1
			},
			"country": "USA",
			"releaseDate": "1999",
			"director": {
				"name": "David Fincher",
				"id": 6
			},
			"pgRate": 16,
			"length": 138,
			"rating": 5,
			"id": 0,
			"title": "Fight Club"
		}];
		if (Object.keys(examples).length > 0) {
			resolve(examples[Object.keys(examples)[0]]);
		} else {
			resolve();
		}
	});
}


/**
 * Retrieves a Movie by its ID
 * Retrieve a movie by ID
 *
 * id Integer ID of the movie to retrieve
 * returns movie
 **/
exports.retrieveMovieById = function (id) {
	return new Promise(function (resolve, reject) {
		var examples = {};
		examples['application/json'] = {
			"studio": {
				"name": "Warner Bros",
				"id": 1
			},
			"country": "USA",
			"releaseDate": "1999",
			"director": {
				"name": "David Fincher",
				"id": 6
			},
			"pgRate": 16,
			"length": 138,
			"rating": 5,
			"id": 0,
			"title": "Fight Club"
		};
		if (Object.keys(examples).length > 0) {
			resolve(examples[Object.keys(examples)[0]]);
		} else {
			resolve();
		}
	});
}


/**
 * Retrieve a list of Movies
 *
 * returns List
 **/
exports.retrieveMovies = function () {
	return new Promise(function (resolve, reject) {
		var examples = {};
		examples['application/json'] = [{
			"studio": {
				"name": "Warner Bros",
				"id": 1
			},
			"country": "USA",
			"releaseDate": "1999",
			"director": {
				"name": "David Fincher",
				"id": 6
			},
			"pgRate": 16,
			"length": 138,
			"rating": 5,
			"id": 0,
			"title": "Fight Club"
		}, {
			"studio": {
				"name": "Warner Bros",
				"id": 1
			},
			"country": "USA",
			"releaseDate": "1999",
			"director": {
				"name": "David Fincher",
				"id": 6
			},
			"pgRate": 16,
			"length": 138,
			"rating": 5,
			"id": 0,
			"title": "Fight Club"
		}];
		if (Object.keys(examples).length > 0) {
			resolve(examples[Object.keys(examples)[0]]);
		} else {
			resolve();
		}
	});
}


/**
 * Update a Movie's information
 *
 * id Long
 * returns List
 **/
exports.updateMovie = function (id) {
	return new Promise(function (resolve, reject) {
		var examples = {};
		examples['application/json'] = [{
			"studio": {
				"name": "Warner Bros",
				"id": 1
			},
			"country": "USA",
			"releaseDate": "1999",
			"director": {
				"name": "David Fincher",
				"id": 6
			},
			"pgRate": 16,
			"length": 138,
			"rating": 5,
			"id": 0,
			"title": "Fight Club"
		}, {
			"studio": {
				"name": "Warner Bros",
				"id": 1
			},
			"country": "USA",
			"releaseDate": "1999",
			"director": {
				"name": "David Fincher",
				"id": 6
			},
			"pgRate": 16,
			"length": 138,
			"rating": 5,
			"id": 0,
			"title": "Fight Club"
		}];
		if (Object.keys(examples).length > 0) {
			resolve(examples[Object.keys(examples)[0]]);
		} else {
			resolve();
		}
	});
}

