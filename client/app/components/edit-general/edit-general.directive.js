'use strict';

/**
 * @ngdoc directive
 *
 * @name editGeneral
 *
 * @description
 * directive for rex
 */
(function () {

  angular
    .module('rex')
    .directive('editGeneral', editGeneral);

  function editGeneral(user) {
    return {
        restrict: 'E',
        templateUrl: 'app/components/edit-general/edit-general.directive.html',
        scope: {
          formData : '=',
          showState : '='
        },
        link: link
    };

    function link(scope) {
      scope.saveChanges = function(){
        user.setDetails(scope.formData).then(function(){
          scope.showState = false;
        });
      };
    }
  }

})();
