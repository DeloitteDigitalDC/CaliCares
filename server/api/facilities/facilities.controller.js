'use strict';

/**
 * @namespace facilities.controller
 */

var request = require('request'),
    config  = require('../../config'),
    utils   = require('../../utils'),
    cwsUrl  = config.cwsUrl,
    apiKey  = config.cwsKey;

var facilities = {};

/**
 * Get facility data
 *
 * @memberof facilities.controller
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response objects
 *
 * @example
 * router.get('/', auth.ensureAuthenticated,  ctrl.getFacilities);
 */
facilities.getFacilities = function getFacilities(req, res) {
  var qs     = req.query;

  qs.api_key = qs.api_key || apiKey;

  request(cwsUrl + '?$$app_token=' + qs.api_key, function (err, response, body) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(utils.confirmJSON(body));
    }
  });
};

/**
 * Get facility data by zipcode
 *
 * @memberof facilities.controller
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response objects
 *
 * @example
 * router.get('/:zipcode', auth.ensureAuthenticated,  ctrl.getByZipcode);
 */
facilities.getByZipcode = function getByZipcode(req, res) {
  var qs     = req.query,
      params = req.params;

  qs.api_key = qs.api_key || apiKey;

  request(cwsUrl + '?facility_zip=' + params.zipcode + '&$$app_token=' + qs.api_key, function (err, response, body) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(utils.confirmJSON(body));
    }
  });
};


module.exports = facilities;
