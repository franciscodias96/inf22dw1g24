'use strict';

var utils = require('../utils/writer.js');
var Studio = require('../service/StudioService');

module.exports.addStudio = function addStudio (req, res, next, body) {
  Studio.addStudio(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteStudioById = function deleteStudioById (req, res, next, id) {
  Studio.deleteStudioById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveStudioById = function retrieveStudioById (req, res, next, id) {
  Studio.retrieveStudioById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveStudios = function retrieveStudios (req, res, next) {
  Studio.retrieveStudios()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateStudio = function updateStudio (req, res, next, id) {
  Studio.updateStudio(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
