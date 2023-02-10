'use strict';

var utils = require('../utils/writer.js');
var Watched = require('../service/WatchedService');

module.exports.createWatchedList = function createWatchedList(req, res, next, body, id) {
	Watched.createWatchedList(body, id)
		.then(function (response) {
			utils.writeJson(res, response);
		})
		.catch(function (response) {
			utils.writeJson(res, response);
		});
};

module.exports.retrieveWatchedList = function retrieveWatchedList(req, res, next, id) {
	Watched.retrieveWatchedList(id)
		.then(function (response) {
			utils.writeJson(res, response);
		})
		.catch(function (response) {
			utils.writeJson(res, response);
		});
};
