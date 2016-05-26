'use strict';

/**
 * @ngdoc controller
 *
 * @name GeneralInfo
 *
 * @description
 * Controller for rex
 */
(function () {

  angular
    .module('rex')
    .controller('GeneralInfo', GeneralInfo);

  function GeneralInfo(user) {
    var vm = this;

    init();

    /**
     * @memberof MyFamily
     */
    function init() {
      // vm.kids = user.getKids();
      user.getDetails().then(function (userData) {
          vm.user = userData.data.data;
          console.log(vm.user);

      });
    }
  }

})();
