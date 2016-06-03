'use strict';

/**
 * @ngdoc controller
 *
 * @name MainCtrl
 *
 * @description
 * Controller for rex
 */
(function() {

  angular
    .module('rex')
    .controller('MainCtrl', MainCtrl);

  function MainCtrl(userDetails, $mdSidenav, $location, $scope) {
    var vm = this;
    init();
    vm.user = userDetails.data;

    vm.closeMenu = function() {
      $mdSidenav('left').close();
    };

    function init(){
      vm.location = $location.path();
      console.log(vm.location);
      $scope.$on('$locationChangeSuccess', function(){
        vm.location = $location.path();
        console.log(vm.location);
      });
    }

  }

})();
