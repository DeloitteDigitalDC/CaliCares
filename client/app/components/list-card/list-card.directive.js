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
        try {
          var addressLine2 = scope.facility.facility_city.toLowerCase() + ', ' + scope.facility.facility_state + ' ' + scope.facility.facility_zip;
          scope.header = scope.facility.facility_name.toLowerCase();
          scope.subheader = scope.facility.facility_type.toLowerCase();
          scope.body = scope.facility.facility_address.toLowerCase();
          scope.address2 = addressLine2;
          scope.phone = scope.facility.facility_telephone_number;
          scope.capacity = scope.facility.facility_capacity;
        } catch(err) {
          console.log(err);
        }

      }
    }
  }

})();
