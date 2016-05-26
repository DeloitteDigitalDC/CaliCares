'use strict';

(function() {

  angular
    .module('rex')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.myFamily.children', {
          url         : '/children',
          templateUrl : 'app/views/my-family/children/children.view.html',
          controller  : 'Children',
          controllerAs: 'Children',
          title       : 'Children'
        });
    });

})();
