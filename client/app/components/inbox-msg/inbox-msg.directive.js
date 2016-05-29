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
      scope.showReply = false;
      
      scope.toggleHistory = function(){
        scope.showHistory = !scope.showHistory;
      }
      scope.toggleReply = function(){
        scope.showReply = !scope.showReply;
      }
      scope.replyMsg = function(reply){
        
      }
    }
  }

})();


