'use strict';

(function() {

  angular
    .module('rex')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.myFamily.generalInfo', {
          url         : '/general-info',
          templateUrl : 'app/views/my-family/general-info/general-info.view.html',
          controller  : 'GeneralInfo',
          controllerAs: 'GeneralInfo',
          title       : 'General info'
        });
    });

})();
