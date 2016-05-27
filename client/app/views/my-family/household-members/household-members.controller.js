'use strict';

/**
 * @ngdoc controller
 *
 * @name HouseholdMembers
 *
 * @description
 * Controller for rex
 */
(function () {

  angular
    .module('rex')
    .controller('HouseholdMembers', HouseholdMembers);

  function HouseholdMembers(user) {
    var vm = this;

    init();

    /**
     * @memberof MyFamily
     */
    function init() {
      user.getDetails().then(function (userData) {
          vm.members = userData.data.data.members;
      });
    }
  }

})();
