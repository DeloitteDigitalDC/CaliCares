'use strict';

(function() {

  angular
    .module('rex')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.myFamily', {
          url         : '/my-family',
          templateUrl : 'app/views/my-family/my-family.view.html',
          controller  : 'MyFamily',
          controllerAs: 'MyFamily',
          title       : 'My family'
        });
    });

})();
