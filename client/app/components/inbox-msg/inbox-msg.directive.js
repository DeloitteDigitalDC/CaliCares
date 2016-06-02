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

  function inboxMsg(user) {
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
        scope.messages[scope.num].time = formatAMPM(date);
        scope.messages[scope.num].dateCreated = (date.getMonth()+1) + '/' + date.getDate() + '/' + date.getFullYear();
        scope.messages[scope.num].message = scope.replyTxt;

        user.getDetails().then(function (userData) {
          scope.messages[scope.num].from = userData.data.data.nickName;
        });

        scope.replyTxt = '';
        scope.showReply = false;
      };
    }

    function formatAMPM(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    }
  }

})();


