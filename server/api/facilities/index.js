'use strict';

/**
 * @name router.facilities
 *
 * @memberof router
 *
 * @description
 * Endpoint for interacting with facilities open data api
 *
 * @example
 * GET /facilities
 *
 * @see facilities.controller
 */
module.exports = function() {
  var router = require('express').Router(),
      ctrl   = require('./facilities.controller');

  router.get('/', ctrl.getFacilities);
  router.get('/:zipcode', ctrl.getByZipcode);

  return router;
};
