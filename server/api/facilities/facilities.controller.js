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
 * router.get('/:type/event', auth.ensureAuthenticated,  ctrl.getEvent);
 */
facilities.getFacilities = function getFacilities(req, res) {
  var qs     = req.query;
    
  qs.api_key = qs.api_key || apiKey;

  request(cwsUrl, function (err, response, body) {
    res.send(utils.confirmJSON(body));
  });
};


module.exports = facilities;
