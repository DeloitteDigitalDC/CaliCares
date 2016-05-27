'use strict';

/**
 * @ngdoc controller
 *
 * @name NewMessageModal
 *
 * @description
 * Controller for rex
 */
(function () {

  angular
    .module('rex')
    .controller('NewMessageModal', NewMessageModal);

  function NewMessageModal($mdDialog) {
    var vm = this;
    vm.closeModal = closeModal;
    vm.submit = submit;

    function closeModal() {
      $mdDialog.cancel();
    }

    function submit() {
      $mdDialog.hide();
    }
  }

})();
