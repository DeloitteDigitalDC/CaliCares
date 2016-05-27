'use strict';

/**
 * @ngdoc directive
 *
 * @name editGeneral
 *
 * @description
 * directive for rex
 */
(function () {

  angular
    .module('rex')
    .directive('editGeneral', editGeneral);

  function editGeneral() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/edit-general/edit-general.directive.html',
        scope: {
          formData : '='
        },
        link: link
    };

    function link() {
    }
  }

})();
