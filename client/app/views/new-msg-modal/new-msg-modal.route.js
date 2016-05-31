'use strict';

(function () {

  angular
    .module('rex')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.newMsgModal', {
          url         : '/new-msg-modal',
          templateUrl : 'app/views/new-msg-modal/new-msg-modal.view.html',
          controller  : 'NewMsgModalCtrl',
          controllerAs: 'newMsgModal',
          title       : 'New msg modal'
        });
    });

})();
