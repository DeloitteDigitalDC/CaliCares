'use strict';

/**
 * @ngdoc directive
 *
 * @name appHeader
 *
 * @description
 * The main header for the application
 *
 * @property {Object} user - the currently logged in user
 * @property {Object} headerOptions - options object for the header, set by the view state
 *
 * @example <app-header user="main.user" headerOptions="main.headerOptions"></app-header>
 */
(function() {

  angular
    .module('rex')
    .directive('appHeader', appHeader);

  function appHeader($state, $mdSidenav, $location) {
    return {
      restrict: 'EA',
      templateUrl: 'app/components/app-header/app-header.directive.html',
      scope: {
        headerOptions: '=',
        user: '='
      },
      link: link
    };

    function link(scope) {
      scope.location = $location.path();
      scope.$on('$locationChangeSuccess', function(){
        scope.location = $location.path();
      });
      scope.homeRoute = homeRoute();
      scope.goTo = goTo;

      /**
       *
       * If the user is logged in take them to the cabinet else go to the home page.
       *
       * @memberof appHeader
       * @returns {String} route name for use in ui-sref directive
       */
      function homeRoute() {
        if (typeof(scope.user) !== 'undefined' && scope.user.data) {
          return 'main.myFamily';
        } else {
          return 'main.home';
        }
      }

      /**
       * Go to the specified link
       *
       * @memberof appHeader
       */
      function goTo() {
        $state.go(scope.headerOptions.link);
      }


      scope.openLeftMenu = function() {
        $mdSidenav('left').toggle();
      };
    }
  }

})();
