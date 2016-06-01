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
    vm.calculateAge = calculateAge;
    init();

    /**
     * @memberof MyFamily
     */
    function init() {
      user.getDetails().then(function (userData) {
        vm.members = userData.data.data.members;
      });
    }

    function calculateAge(birthday){
      return (moment().diff(moment(birthday, 'MM-DD-YYYY'), 'years'));
    }
  }

})();
