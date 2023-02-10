'use strict';

var sql = require('../utils/db.js');
var utils = require('../utils/writer.js');


/**
 * Create a new user
 *
 * body User Create a new user
 * returns List
 **/
exports.createUser = function (body) {
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
 * Deletes a user by ID
 *
 * id Long
 * returns List
 **/
exports.deleteUser = function (id) {
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
 * Retrieve user
 *
 * id Long
 * returns List
 **/
exports.retrieveUser = function (id) {
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
 * Retrieve users
 *
 * returns List
 **/
exports.retrieveUsers = function () {
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
 * Update a user's information
 *
 * id Long
 * returns List
 **/
exports.updateUser = function (id) {
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

