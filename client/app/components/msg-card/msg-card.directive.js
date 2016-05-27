'use strict';

/**
 * @ngdoc directive
 *
 * @name msgCard
 *
 * @description
 * directive for rex
 *
 * @property {Array} message - a specific message object
 *
 * @example <msg-card message="msg"></msg-card>
 */
(function () {

  angular
    .module('rex')
    .directive('msgCard', msgCard);

  function msgCard() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/msg-card/msg-card.directive.html',
        scope: {
          message: '='
        },
        link: link
    };

    function link(scope) {
      scope.message.from ="test";
    }
  }

})();
