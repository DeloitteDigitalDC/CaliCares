'use strict';

/**
 * @ngdoc directive
 *
 * @name listCard
 *
 * @description
 * directive for rex
 */
(function () {

  angular
    .module('rex')
    .directive('listCard', listCard);

  function listCard() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/list-card/list-card.directive.html',
        scope: {
          facility: '='
        },
        link: link
    };

    function link(scope) {
      if (scope.facility){
        var addressLine2 = scope.facility.facility_city + ", " + scope.facility.facility_state + " " + scope.facility.facility_zip;
        scope.header = scope.facility.facility_name;
        scope.subheader = scope.facility.facility_type;
        scope.body = scope.facility.facility_address;
        scope.address2 = addressLine2;
      }
    }
  }

})();
