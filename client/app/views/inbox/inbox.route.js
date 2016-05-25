'use strict';

(function () {

  angular
    .module('rex')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.inbox', {
          url         : '/inbox',
          templateUrl : 'app/views/inbox/inbox.view.html',
          controller  : 'InboxCtrl',
          controllerAs: 'inbox',
          title       : 'Inbox'
        });
    });

})();
