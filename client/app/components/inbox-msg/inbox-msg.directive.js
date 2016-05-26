'use strict';

/**
 * @ngdoc directive
 *
 * @name inboxMsg
 *
 * @description
 * directive for rex
 */
(function () {

  angular
    .module('rex')
    .directive('inboxMsg', inboxMsg);

  function inboxMsg() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/inbox-msg/inbox-msg.directive.html',
        scope: {
          messages: '=',
          num: "="
        },
        link: link
    };

    function link() {
      console.log(this);
    }
  }

})();


