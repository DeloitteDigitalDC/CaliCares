'use strict';

/**
 * @ngdoc directive
 *
 * @name inboxMsg
 *
 * @description
 * directive for viewing a message
 *  
 * @property {Array} messages - a specific message object
 *
 * @example <inbox-msg messages='msgs'></inbox-msg>
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
      scope.showReply = false;
      scope.replyTxt = 'test';
      scope.toggleHistory = function () {
        scope.showHistory = !scope.showHistory;
      };
      scope.toggleReply = function () {
        scope.showReply = !scope.showReply;
      };
      scope.replyMsg = function () {
        scope.messages[scope.num].previousMessages.push({
            from: scope.messages[scope.num].from,
            time: scope.messages[scope.num].time,
            date: scope.messages[scope.num].dateCreated,
            message: scope.messages[scope.num].message
        });

        var date = new Date();
        scope.messages[scope.num].time = date.getTime();
        scope.messages[scope.num].dateCreated = date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
        scope.messages[scope.num].message = scope.replyTxt;
        
        scope.replyTxt = '';
        scope.showReply = false;
      };
    }
  }

})();


