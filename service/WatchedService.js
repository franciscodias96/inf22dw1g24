'use strict';

var sql = require('../utils/db.js');
var utils = require('../utils/writer.js');

/**
 * Create a Watched List for the user
 *
 * body Watched Create a new user
 * id Integer ID of the movie to retrieve
 * returns List
 **/
exports.createWatchedList = function (body, id) {
	return new Promise(function (resolve, reject) {
		var examples = {};
		examples['application/json'] = [{
			"movie": {
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
			},
			"user": {
				"password": "password",
				"birthdate": "1996-01-01T00:00:00.000+00:00",
				"name": "Francisco Dias",
				"nif": 123456789,
				"id": 10,
				"email": "a029185@umaia.pt"
			}
		}, {
			"movie": {
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
			},
			"user": {
				"password": "password",
				"birthdate": "1996-01-01T00:00:00.000+00:00",
				"name": "Francisco Dias",
				"nif": 123456789,
				"id": 10,
				"email": "a029185@umaia.pt"
			}
		}];
		if (Object.keys(examples).length > 0) {
			resolve(examples[Object.keys(examples)[0]]);
		} else {
			resolve();
		}
	});
}


/**
 * Retrieves a user's watched Movie list
 *
 * id Long
 * returns List
 **/
exports.retrieveWatchedList = function (id) {
	return new Promise(function (resolve, reject) {
		var examples = {};
		examples['application/json'] = [{
			"movie": {
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
			},
			"user": {
				"password": "password",
				"birthdate": "1996-01-01T00:00:00.000+00:00",
				"name": "Francisco Dias",
				"nif": 123456789,
				"id": 10,
				"email": "a029185@umaia.pt"
			}
		}, {
			"movie": {
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
			},
			"user": {
				"password": "password",
				"birthdate": "1996-01-01T00:00:00.000+00:00",
				"name": "Francisco Dias",
				"nif": 123456789,
				"id": 10,
				"email": "a029185@umaia.pt"
			}
		}];
		if (Object.keys(examples).length > 0) {
			resolve(examples[Object.keys(examples)[0]]);
		} else {
			resolve();
		}
	});
}

