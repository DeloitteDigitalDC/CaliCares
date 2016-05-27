'use strict';

/**
 * @ngdoc directive
 *
 * @name msgCard
 *
 * @description
 * directive for rex
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


