'use strict';

/**
 * @ngdoc factory
 *
 * @name facilities
 *
 * @description
 * Factory for rex
 */
(function () {

  angular
    .module('rex')
    .factory('facilities', facilities);

  function facilities($http) {
    return {
      getFacilities  : getFacilities
    };
    
    /**
     * gets facilities from api
     *
     * @memberof user
     *
     * @param {String} username - the username
     * @param {String} password - the password
     */
    function getFacilities() {
      var promise = $http.get('/facilities');
      
      return promise;
    }
  }

})();

