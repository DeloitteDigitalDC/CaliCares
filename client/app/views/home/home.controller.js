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

  function HomeCtrl($scope) {
    var vm = this;
    vm.map = {
      center: {
        latitude: 37.79,
        longitude: -122.4175
      },
      zoom: 13
    };
    vm.marker = {
      idKey: 123,
      coords: {
        latitude: 37.7836377,
        longitude: -122.4132168
      }
    };
  }

})();
