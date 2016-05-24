'use strict';

/**
 * @ngdoc controller
 *
 * @name MyFamily
 *
 * @description
 * Controller for rex
 */
(function () {

  angular
    .module('rex')
    .controller('MyFamily', MyFamily);

  function MyFamily(user) {
    var vm = this;

    init();

    /**
     * @memberof MyFamily
     */
    function init() {
      vm.kids = user.getKids();
    }
  }

})();
