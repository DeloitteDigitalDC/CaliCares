'use strict';

/**
 * @ngdoc controller
 *
 * @name HomeCtrl
 *
 * @description
 * The home landing page controller
 */
(function() {

  angular
    .module('rex')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl(facilities) {
    facilities.getFacilities().then(function (res) {
      console.log(res.data);
    });
    facilities.getByZipcode('91762').then(function (res) {
      console.log(res.data);
    });
  }

})();
