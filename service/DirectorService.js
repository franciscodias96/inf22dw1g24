'use strict';

var sql = require('../utils/db.js');
var utils = require('../utils/writer.js');

/**
 * Add a new director
 *
 * body Director Add a new director
 * returns List
 **/
exports.addUser = function (body) {
	return new Promise(function (resolve, reject) {
		var examples = {};
		examples['application/json'] = [{
			"password": "password",
			"birthdate": "1996-01-01T00:00:00.000+00:00",
			"name": "Francisco Dias",
			"nif": 123456789,
			"id": 10,
			"email": "a029185@umaia.pt"
		}, {
			"password": "password",
			"birthdate": "1996-01-01T00:00:00.000+00:00",
			"name": "Francisco Dias",
			"nif": 123456789,
			"id": 10,
			"email": "a029185@umaia.pt"
		}];
		if (Object.keys(examples).length > 0) {
			resolve(examples[Object.keys(examples)[0]]);
		} else {
			resolve();
		}
	});
}


/**
 * Deletes a Director by its ID
 * Deletes a Director by ID
 *
 * id Integer ID of the Director to delete
 * returns director
 **/
exports.deleteDirectorById = function (id) {
	return new Promise(function (resolve, reject) {
		var examples = {};
		examples['application/json'] = {
			"name": "David Fincher",
			"id": 6
		};
		if (Object.keys(examples).length > 0) {
			resolve(examples[Object.keys(examples)[0]]);
		} else {
			resolve();
		}
	});
}


/**
 * Retrieves a Director by its ID
 * Retrieve a Director by ID
 *
 * id Integer ID of the Director to retrieve
 * returns director
 **/
exports.retrieveDirectorById = function (id) {
	return new Promise(function (resolve, reject) {
		var examples = {};
		examples['application/json'] = {
			"name": "David Fincher",
			"id": 6
		};
		if (Object.keys(examples).length > 0) {
			resolve(examples[Object.keys(examples)[0]]);
		} else {
			resolve();
		}
	});
}


/**
 * Retrieve a list of Directors
 *
 * returns List
 **/
exports.retrieveDirectors = function () {
	return new Promise(function (resolve, reject) {
		var examples = {};
		examples['application/json'] = [{
			"name": "David Fincher",
			"id": 6
		}, {
			"name": "David Fincher",
			"id": 6
		}];
		if (Object.keys(examples).length > 0) {
			resolve(examples[Object.keys(examples)[0]]);
		} else {
			resolve();
		}
	});
}


/**
 * Update a Director's information
 *
 * id Long
 * returns List
 **/
exports.updateDirector = function (id) {
	return new Promise(function (resolve, reject) {
		var examples = {};
		examples['application/json'] = [{
			"name": "David Fincher",
			"id": 6
		}, {
			"name": "David Fincher",
			"id": 6
		}];
		if (Object.keys(examples).length > 0) {
			resolve(examples[Object.keys(examples)[0]]);
		} else {
			resolve();
		}
	});
}

