'use strict';

/**
 * @ngdoc directive
 *
 * @name inboxMsg
 *
 * @description
 * directive for rex
 *  
 * @property {Array} messages - a specific message object
 *
 * @example <inbox-msg messages="msgs"></inbox-msg>
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
          num: '='
        },
        link: link
    };

    function link(scope) {
      scope.showHistory = false;
      scope.toggleHistory = function(){
        scope.showHistory = !scope.showHistory;
      }
    }
  }

})();


