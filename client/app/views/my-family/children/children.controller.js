'use strict';

/**
 * @ngdoc controller
 *
 * @name Children
 *
 * @description
 * Controller for rex
 */
(function () {

  angular
    .module('rex')
    .controller('Children', Children);

  function Children(user) {
    var vm = this;

    init();

    /**
     * @memberof MyFamily
     */
    function init() {
      vm.kids = user.getKids();
      console.log(vm.kids);
    }

  }

})();
