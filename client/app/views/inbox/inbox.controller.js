'use strict';

/**
 * @ngdoc controller
 *
 * @name Inbox
 *
 * @description
 * Controller for rex
 */
(function () {

  angular
    .module('rex')
    .controller('Inbox', Inbox);

  function Inbox() {
    var vm = this;

    vm.foo = [];
  }

})();

