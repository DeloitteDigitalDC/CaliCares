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

  function Children() {
    var vm = this;

    vm.foo = [];
  }

})();

