'use strict';

(function() {

  angular
    .module('rex')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.facilities', {
          url         : '/facility-search',
          templateUrl : 'app/views/facility-search/facility-search.view.html',
          controller  : 'FacilitySearch',
          controllerAs: 'FacilitySearch',
          title       : 'Facility search'
        });
    });

})();
