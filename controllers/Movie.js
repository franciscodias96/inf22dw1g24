'use strict';

var utils = require('../utils/writer.js');
var Movie = require('../service/MovieService');

module.exports.deleteMovieById = function deleteMovieById (req, res, next, id) {
  Movie.deleteMovieById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.insertMovie = function insertMovie (req, res, next, body) {
  Movie.insertMovie(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveMovieById = function retrieveMovieById (req, res, next, id) {
  Movie.retrieveMovieById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveMovies = function retrieveMovies (req, res, next) {
  Movie.retrieveMovies()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateMovie = function updateMovie (req, res, next, id) {
  Movie.updateMovie(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
