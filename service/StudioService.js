'use strict';

var sql = require('../utils/db.js');
var utils = require('../utils/writer.js');

/**
 * Add a new Studio
 *
 * body Studio Add a new studio
 * returns List
 **/
exports.addStudio = function (body) {
	return new Promise(function (resolve, reject) {
		var examples = {};
		examples['application/json'] = [{
			"name": "Warner Bros",
			"id": 1
		}, {
			"name": "Warner Bros",
			"id": 1
		}];
		if (Object.keys(examples).length > 0) {
			resolve(examples[Object.keys(examples)[0]]);
		} else {
			resolve();
		}
	});
}


/**
 * Deletes a Studio by its ID
 * Deletes a Studio by ID
 *
 * id Integer ID of the Studio to delete
 * returns studio
 **/
exports.deleteStudioById = function (id) {
	return new Promise(function (resolve, reject) {
		var examples = {};
		examples['application/json'] = {
			"name": "Warner Bros",
			"id": 1
		};
		if (Object.keys(examples).length > 0) {
			resolve(examples[Object.keys(examples)[0]]);
		} else {
			resolve();
		}
	});
}


/**
 * Retrieves a Studio by its ID
 * Retrieve a Studio by ID
 *
 * id Integer ID of the Studio to retrieve
 * returns studio
 **/
exports.retrieveStudioById = function (id) {
	return new Promise(function (resolve, reject) {
		var examples = {};
		examples['application/json'] = {
			"name": "Warner Bros",
			"id": 1
		};
		if (Object.keys(examples).length > 0) {
			resolve(examples[Object.keys(examples)[0]]);
		} else {
			resolve();
		}
	});
}


/**
 * Retrieve a list of Studio
 *
 * returns List
 **/
exports.retrieveStudios = function () {
	return new Promise(function (resolve, reject) {
		var examples = {};
		examples['application/json'] = [{
			"name": "Warner Bros",
			"id": 1
		}, {
			"name": "Warner Bros",
			"id": 1
		}];
		if (Object.keys(examples).length > 0) {
			resolve(examples[Object.keys(examples)[0]]);
		} else {
			resolve();
		}
	});
}


/**
 * Update a Studio's information
 *
 * id Long
 * returns List
 **/
exports.updateStudio = function (id) {
	return new Promise(function (resolve, reject) {
		var examples = {};
		examples['application/json'] = [{
			"name": "Warner Bros",
			"id": 1
		}, {
			"name": "Warner Bros",
			"id": 1
		}];
		if (Object.keys(examples).length > 0) {
			resolve(examples[Object.keys(examples)[0]]);
		} else {
			resolve();
		}
	});
}

