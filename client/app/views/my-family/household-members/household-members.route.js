'use strict';

(function() {

  angular
    .module('rex')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.myFamily.householdMembers', {
          url         : '/household-members',
          templateUrl : 'app/views/my-family/household-members/household-members.view.html',
          controller  : 'HouseholdMembers',
          controllerAs: 'HouseholdMembers',
          title       : 'Household members'
        });
    });

})();
