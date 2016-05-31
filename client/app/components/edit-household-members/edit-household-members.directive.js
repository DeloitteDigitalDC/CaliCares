'use strict';

/**
 * @ngdoc directive
 *
 * @name editHouseholdMembers
 *
 * @description
 * directive for rex
 */
(function () {

  angular
    .module('rex')
    .directive('editHouseholdMembers', editHouseholdMembers);

  function editHouseholdMembers(user) {
    return {
        restrict: 'E',
        templateUrl: 'app/components/edit-household-members/edit-household-members.directive.html',
        scope: {
          formData : '=',
          memberId : '='
        },
        link: link
    };

    function link(scope) {
      scope.saveChanges = function(){
        user.setMember(scope.formData).then(function(){
          scope.memberId = null;
        });
      };
    }
  }

})();
