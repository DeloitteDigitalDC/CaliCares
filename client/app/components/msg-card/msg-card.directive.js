'use strict';

/**
 * @ngdoc directive
 *
 * @name msgCard
 *
 * @description
<<<<<<< HEAD
 * directive for rex
 *
 * @property {Array} message - a specific message object
=======
 * directive for seeing a card with message details
 *
 * @property {object} message - a specific message object
>>>>>>> cfbd9047d941ac88e5755ffb5ef5b60bdb950f11
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

    function link() {
    }
  }

})();
