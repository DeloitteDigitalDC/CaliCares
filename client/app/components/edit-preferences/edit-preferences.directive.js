'use strict';

/**
 * @ngdoc directive
 *
 * @name editPreferences
 *
 * @description
 * directive for rex
 */
(function () {

  angular
    .module('rex')
    .directive('editPreferences', editPreferences);

  function editPreferences(user) {
    return {
        restrict: 'E',
        templateUrl: 'app/components/edit-preferences/edit-preferences.directive.html',
        scope: {
            formData : '=',
            showState : '='
        },
        link: link
    };

    function link(scope) {
      scope.saveChanges = function(){
        user.setPrefs(scope.formData).then(function(){
          scope.showState = false;
        });
      };
    }
  }

})();
