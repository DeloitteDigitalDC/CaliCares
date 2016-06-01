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
    vm.user = {};
    vm.certifications = [];
    vm.services = [];

    init();

    /**
     * @memberof MyFamily
     */
    function init() {
      // vm.kids = user.getKids();
      user.getDetails().then(function (userData) {
          vm.user = userData.data.data;

          _.forEach(vm.user.members, function(member){
            vm.certifications.push(member.certifications);
          });

          _.forEach(vm.user.members, function(member){
            vm.services.push(member.services);
          });

      });
    }
  }

})();
