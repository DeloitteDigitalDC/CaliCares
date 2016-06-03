'use strict';

/**
 * @ngdoc controller
 *
 * @name NewMsgModal
 *
 * @description
 * Controller for rex
 */
(function () {

  angular
    .module('rex')
    .controller('NewMsgModal', NewMsgModal);

  function NewMsgModal($mdDialog) {
    var vm = this;

    vm.closeModal = closeModal;
    vm.submit = submit;

    function closeModal() {
      $mdDialog.cancel();
    }

    function submit() {
      $mdDialog.hide(vm.msg);
    }
  }

})();
