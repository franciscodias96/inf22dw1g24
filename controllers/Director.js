'use strict';

var utils = require('../utils/writer.js');
var Director = require('../service/DirectorService');

module.exports.addUser = function addUser (req, res, next, body) {
  Director.addUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteDirectorById = function deleteDirectorById (req, res, next, id) {
  Director.deleteDirectorById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveDirectorById = function retrieveDirectorById (req, res, next, id) {
  Director.retrieveDirectorById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveDirectors = function retrieveDirectors (req, res, next) {
  Director.retrieveDirectors()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateDirector = function updateDirector (req, res, next, id) {
  Director.updateDirector(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
