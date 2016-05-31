'use strict';

/**
 * @name router.user
 *
 * @memberof router
 *
 * @description
 * Endpoint for interacting with fda open data api
 *
 * @example
 * GET /user/me@mail.com/cabinet/
 *
 * @see fda.controller
 */
module.exports = function(auth) {
  var router = require('express').Router(),
      ctrl   = require('./user.controller');


  router.get('/:uid/details/', auth.ensureAuthenticated, ctrl.getDetails);
  router.get('/:uid/children/', auth.ensureAuthenticated, ctrl.getChildren);

  router.patch('/:uid/details/', auth.ensureAuthenticated, ctrl.setDetails);
  router.patch('/:uid/prefs/', auth.ensureAuthenticated, ctrl.setPrefs);

  router.patch('/:uid/houseHoldMembers/', auth.ensureAuthenticated, ctrl.setHouseholdMembers);


  //TODO: delete router and functions in controller
  router.get('/:uid/cabinet/', auth.ensureAuthenticated, ctrl.getCabinetDrugs);
  router.post('/:uid/cabinet/', auth.ensureAuthenticated, ctrl.addCabinetDrug);
  router.delete('/:uid/cabinet/:drugId', auth.ensureAuthenticated, ctrl.deleteCabinetDrug);


  return router;
};
